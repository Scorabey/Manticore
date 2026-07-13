'use client'

import { PrimaryButton, PrimaryButtonSkeleton } from "@/component/buttons/primary/button"
import { Input, InputSkeleton } from "@/component/inputs/input"
import { KeyIcon } from "@heroicons/react/24/outline"
import style from './style.module.scss'
import { UserAuth } from "./userAuth"
import { useActionState, useState } from "react"
import { State } from "@/lib/types/types"

export default function AuthPage() {

    const [state, formAction] = useActionState(UserAuth, null)

    const [emailError, setEmailError] = useState('')
    const [emailState, setEmailState] = useState<State | null>(null)

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
                type="email"
                state={emailState}
                info={emailError}
                required
                onChange={(event) => {
                    if(event.target.validity.valid) {
                        setEmailState("success")
                        setEmailError("Верный формат!")
                    } else {
                        setEmailState("error")
                        setEmailError("Неправильный формат!")
                    }
                }}/>
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