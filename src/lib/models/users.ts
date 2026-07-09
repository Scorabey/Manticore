import { db } from "../db/db"
import { User, PublicUser } from "../types/types"
import { ResultSetHeader, RowDataPacket } from "mysql2"

export class Users {
    async getAll() {
        const [users] = await db.query<(PublicUser & RowDataPacket)[]>(
            "SELECT id, login, email, age FROM users"
        )

        return users
    }
    async getById(id: number) {
        const [users] = await db.query<(PublicUser & RowDataPacket)[]>(
            "SELECT id, login, email, age FROM users WHERE id = ?",
            [id]
        )

        return users[0] ?? null
    }
    async add(
        login: string,
        email: string,
        age: number,
        password: string
    ) {
        const [result] = await db.execute<ResultSetHeader>(
            "INSERT INTO users(login, password, email, age) VALUES(?, ?, ?, ?)",
            [login, password, email, age]
        )

        return result.insertId
    }
    async update(
        login: string,
        email: string,
        age: number,
        password: string,
        id: number
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
            [login, password, email, age, id]
        )

        return result.affectedRows > 0;
    }
    async delete(id: number) {
        const [result] = await db.execute<ResultSetHeader>(
            "DELETE FROM users WHERE id = ?",
            [id]
        )

        return result.affectedRows > 0;
    }
}