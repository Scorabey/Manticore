'use server'

import { addNewUser } from "@/entities/user/users"
import { redirect } from "next/navigation"
import { QueryError } from "mysql2"
import { getSession, sessionBinding } from "../session/session"
import { FieldState } from "@/shared/lib/types/types"
import { getUserByLogin } from "@/entities/user/users"
import { verifyPassword } from "@/shared/lib/db/password"
import { cookies } from "next/headers"
import { verifyJWT } from "../services/JWTService"

export async function registrationUserService(
    prevState: FieldState| null, 
    formData: FormData): Promise<FieldState> {

    const data = {
        login: formData.get('login') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirm') as string
    }

    if(data.password !== data.confirmPassword) {        // Проверка совпадения паролей
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

export async function loginizationUserService(
    prevState: FieldState| null, 
    formData: FormData): Promise<FieldState> {

    const data = {
        login: formData.get('login') as string,
        password: formData.get('password') as string
    }

    let user;

    let isValidPass = false

    try {                                           // Получение пользователя из БД
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

    try {                                           // Проверка логина и пароля
        isValidPass = await verifyPassword(
            user.password, data.password
        )

        if(!isValidPass && !user) {
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

    try {                                           // Создание активной сессии
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

export async function authenticateUserService() {
    const token = (await cookies()).get('session')?.value

    if(!token) {
        redirect('/authorization/sign-up')
    }

    const payload = await verifyJWT(token)

    if (!payload) {
        redirect('/authorization/sign-up')
    }

    return payload.userId
}