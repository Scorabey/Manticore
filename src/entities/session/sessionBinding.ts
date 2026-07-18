import crypto from "crypto"
import { cookies } from "next/headers";
import { saveToken } from "./session";

export const SESSION_DAYS = 30

export async function sessionBinding(
    userId: number
) {
    const token = crypto.randomBytes(32).toString('hex')

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + SESSION_DAYS);

    const cookiesStore = await cookies();

    try {
        await saveToken(userId, token, expiresAt)

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