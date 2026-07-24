'use server'

import crypto from "crypto"
import { db } from "@/shared/lib/db/db"
import { cookies } from "next/headers"
import { ResultSetHeader } from "mysql2"
import { Session } from "@/shared/lib/types/types"

const SESSION_DAYS = 30

export async function saveToken(
    userId: number,
    token: string,
    expiresAt: Date
) {
    const [result] = await db.execute<ResultSetHeader>(
        "INSERT INTO sessions(user_id, token, expires_at) VALUES(?, ?, ?)",
        [userId, token, expiresAt]
    )

    if(result.affectedRows !== 1) {
        throw new Error("Failed to create session.")
    }
}

export async function getSession(token: string) {
    const [rows] = await db.query<Session[]>(
        `SELECT 
            users.id,
            users.login,
            users.email
        FROM sessions
        JOIN users ON users.id = sessions.user_id
        WHERE sessions.token = ?
        AND sessions.expires_at > NOW()
        LIMIT 1`,
        [token]
    )

    return rows[0] ?? null
}

export async function sessionBinding(
    userId: number
) {
    const token = crypto.randomBytes(32).toString('hex')

    const hashToken = crypto
        .createHash('sha256')
        .update(token)
        .digest("hex")

    console.log(`
        Hash: ${hashToken}
        Token: ${token}
        `)

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + SESSION_DAYS);

    const cookiesStore = await cookies();

    try {
        await saveToken(userId, hashToken, expiresAt)

        cookiesStore.set('session', token, {
            expires: expiresAt,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: SESSION_DAYS * 24 * 60 * 60
        })

        return { success: true }
    } catch(error) {
        throw new Error(`Failed binding session: 
            ${error instanceof Error
            ? error.message
            : 'Unknown server error'}`)
    }
}