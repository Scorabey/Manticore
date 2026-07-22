'use server'

import { addNewUser } from "@/entities/user/users"
import { redirect } from "next/navigation"
import { QueryError } from "mysql2"
import { sessionBinding } from "../session/session"
import { FieldState } from "@/shared/lib/types/types"

export async function UserAuth(
    prevState: FieldState| null, 
    formData: FormData): Promise<FieldState> {

    const data = {
        login: formData.get('login') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirm') as string
    }

    if(data.password !== data.confirmPassword) {
        return {
            success: false,
            errors: {
                confirm: 'Пароли не совпадают!',
            },
        }
    }
    try {
        const userId = await addNewUser({ 
            login: data.login, 
            email: data.email, 
            password: data.password 
        })
        await sessionBinding(userId)
    } catch(error) {
        const validError = error as QueryError

        if(validError.code === 'ER_DUP_ENTRY') {
            if(validError.message.includes("uq_users_login")) {
                return {
                    success: false,
                    errors: {
                        login: "Это имя уже занято!"
                    }
                }
            }
            if(validError.message.includes("uq_users_email")) {
                return {
                    success: false,
                    errors: {
                        email: "Адрес електроной почты уже занят!"
                    }
                }
            }
        }

        return {
            success: false,
            errors: {
                global: "Ошибка базы данных!"
            }
        }
    }
    redirect('/')
}