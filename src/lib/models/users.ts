import { cacheLife, cacheTag, updateTag } from "next/cache"
import { db } from "../db/db"
import { PublicUser, CreateUser, UpdateUser } from "../types/types"
import { ResultSetHeader, RowDataPacket } from "mysql2"
import { hashPassword } from "../db/password"

export class Users {
    async getAll() {
        "use cache"
        cacheLife("minutes")
        cacheTag("users")
        const [users] = await db.query<(PublicUser & RowDataPacket)[]>(
            "SELECT id, login, email, age FROM users"
        )

        return users
    }
    async getById(id: number) {
        "use cache"
        cacheLife("minutes")
        cacheTag(`user-${id}`)
        const [users] = await db.query<(PublicUser & RowDataPacket)[]>(
            "SELECT id, login, email, age FROM users WHERE id = ?",
            [id]
        )

        return users[0] ?? null
    }
    async add(
        data: CreateUser
    ) {
        const hashedPassword = await hashPassword(data.password)

        const [result] = await db.execute<ResultSetHeader>(
            "INSERT INTO users(login, password, email, age) VALUES(?, ?, ?, ?)",
            [data.login, hashedPassword, data.email, data.age]
        )

        updateTag("users")

        return result.insertId
    }
    async update(
        id: number,
        data: UpdateUser
    ) {
        const [result] = await db.execute<ResultSetHeader>(
            `
            UPDATE users 
            SET 
                login = ?,
                password = ?,
                email = ?,
                age = ?
            WHERE id = ?
            `,
            [data.login, data.password, data.email, data.age, id]
        )

        if(result.affectedRows > 0) {
            updateTag("users")
            updateTag(`user-${id}`)
        }

        return result.affectedRows > 0;
    }
    async delete(id: number) {
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
}