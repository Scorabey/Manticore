'use server'

import { addNewUser } from "@/lib/models/users"
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
    const login = formData.get('login') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirm') as string

    if(password !== confirmPassword) {
        return {
            success: false,
            errors: {
                confirm: 'Пароли не совпадают!',
            },
        }
    }
    try {
        await addNewUser({ 
            login: login, 
            email: email, 
            password: password 
        })
    } catch(error) {
        const validError = error as QueryError

        switch (validError.code) {
            case "ER_DUP_ENTRY":
                return {
                    success: false,
                    errors: {
                        email: "Адрес электроной почты уже занят!"
                    }
                }
            default: 
                return {
                    success: false,
                    errors: {
                        global: "Ошибка создания пользователя!"
                    }
                }
        }
    }
    redirect('/')
}