'use client'

import { PrimaryButton, PrimaryButtonSkeleton } from "@/component/buttons/primary/button"
import { Input, InputSkeleton } from "@/component/inputs/input"
import { KeyIcon } from "@heroicons/react/24/outline"
import style from './style.module.scss'
import { UserAuth } from "./userAuth"
import { useActionState } from "react"

export default function AuthPage() {

    const [state, formAction] = useActionState(UserAuth, null)

    return (
        <article
        className={style.article}>
            <h2
            className={style.title}>Create An Account</h2>
            <form
            id="register-form"
            action={formAction}
            className={style.form}>
                <Input
                className={style.formInput}
                placeholder="Enter Login"
                label="Login"
                name="login"
                type="text"/>
                <Input
                className={style.formInput}
                placeholder="Enter Email"
                label="Email"
                name="email"
                type="email"/>
                <Input
                className={style.formInput}
                placeholder="Enter Password"
                label="Password"
                name="password"
                type="password"
                LeftIcon={KeyIcon}/>
                <Input
                className={style.formInput}
                placeholder="Confirm Password"
                label="Confirm Password"
                name="confirm"
                type="password"
                LeftIcon={KeyIcon}/>
                {state?.errors?.confirm && (
                    <p className={style.error}>{state.errors.confirm}</p>
                )}
            </form>
            <PrimaryButton
            form='register-form'
            className={style.createButton}
            themeColor="blue"
            type="submit">
                Create an Account
            </PrimaryButton>
        </article>
    )
}