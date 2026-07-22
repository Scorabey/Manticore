'use server'

import { getUserByLogin } from "./users"
import { redirect } from "next/navigation"
import { sessionBinding } from "../session/session"
import { FieldState } from "@/shared/lib/types/types"
import { verifyPassword } from "@/shared/lib/db/password"

export async function UserEntry(
    prevState: FieldState| null, 
    formData: FormData): Promise<FieldState> {
    const data = {
        login: formData.get('login') as string,
        password: formData.get('password') as string
    }

    if(!data.login.trim() || !data.password) {
        return {
            success: false,
            errors: {
                global: "Заполните все поля."
            }
        }
    }

    let user;

    try {
        user = await getUserByLogin(data.login.trim())
    } catch(error) {
        console.error(`Ошибка получения пользователя: ${error}`)

        return {
            success: false,
            errors: {
                global: `Внутренняя ошибка сервера.`
            }
        }
    }

    if(!user) {
        return {
            success: false,
            errors: {
                global: 'Неверный логин или пароль.'
            }
        }
    }

    let isValidPass = false

    try {
        isValidPass = await verifyPassword(
            user.password, data.password
        )

        if(!isValidPass) {
            return {
                success: false,
                errors: {
                    global: 'Неверный логин или пароль.'
                }
            }
        }
    } catch(error) {
        console.error(`Внутрення ошибка сервера.: ${error}`)

        return {
            success: false,
            errors: {
                password: `Внутрення ошибка сервера.`
            }
        }
    }

    try {
        await sessionBinding(user.id)
    } catch(error) {
        console.error(`Ошибка при создании сессии: ${error}`)

        return {
            success: false,
            errors: {
                global: `Ошибка при создании сессии`
            }
        }
    }

    redirect('/')
}
