import { cacheLife, cacheTag, updateTag } from "next/cache"
import { db } from "@/shared/lib/db/db"
import { PublicUser, CreateUser, UpdateUser } from "@/shared/lib/types/types"
import { ResultSetHeader, RowDataPacket } from "mysql2"
import { hashPassword } from "@/shared/lib/db/password"

export async function getAllUsers() {
    "use cache"
    cacheLife("minutes")
    cacheTag("users")
    const [users] = await db.query<(PublicUser & RowDataPacket)[]>(
        "SELECT id, login, email, age FROM users"
    )

    return users
}
export async function getUserById(id: number) {
    "use cache"
    cacheLife("minutes")
    cacheTag(`user-${id}`)
    const [users] = await db.query<(PublicUser & RowDataPacket)[]>(
        "SELECT id, login, email, age FROM users WHERE id = ?",
        [id]
    )

    return users[0] ?? null
}
export async function addNewUser(data: CreateUser) {
    const hashedPassword = await hashPassword(data.password)

    const [result] = await db.execute<ResultSetHeader>(
        "INSERT INTO users(login, password, email) VALUES(?, ?, ?)",
        [data.login, hashedPassword, data.email]
    )

    updateTag("users")

    return result.insertId 
}
export async function updateUser(
        id: number,
        data: UpdateUser
    ) {
    const [result] = await db.execute<ResultSetHeader>(
        `
        UPDATE users 
        SET 
            login = ?,
            password = ?,
            email = ?
        WHERE id = ?
        `,
        [data.login, data.password, data.email, id]
    )

    if(result.affectedRows > 0) {
        updateTag("users")
        updateTag(`user-${id}`)
    }

    return result.affectedRows > 0;
}
export async function deleteUser(id: number) {
    const [result] = await db.execute<ResultSetHeader>(
        "DELETE FROM users WHERE id = ?",
        [id]
    )

    if(result.affectedRows > 0) {
        updateTag("users")
        updateTag(`user-${id}`)
    }

    return result.affectedRows > 0;
}