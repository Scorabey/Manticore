'use server'

import { addNewUser } from "@/entities/user/users"
import { redirect } from "next/navigation"
import { QueryError } from "mysql2"

type State = {
    success: boolean
    errors?: {
        confirm?: string
        email?: string
        global?: string
        login?: string
    }
}

export async function UserAuth(
    prevState: State| null, 
    formData: FormData): Promise<State> {

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
        await addNewUser({ 
            login: data.login, 
            email: data.email, 
            password: data.password 
        })
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