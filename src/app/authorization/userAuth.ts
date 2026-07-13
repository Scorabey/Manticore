'use server'

import { addNewUser } from "@/lib/models/users"
import { redirect } from "next/navigation"

type State = {
    success: boolean
    errors?: {
        confirm?: string
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
    } else {
        await addNewUser({ login: login, email: email, password: password })

        redirect('/')
    }
}