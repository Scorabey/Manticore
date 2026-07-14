'use client'

import { PrimaryButton } from "@/shared/ui/buttons/primary/button"
import { Input } from "@/shared/ui/inputs/input"
import { KeyIcon } from "@heroicons/react/24/outline"
import style from './style.module.scss'
import { UserAuth } from "@/entities/user/userAuth"
import { useActionState, useEffect, useState } from "react"
import { State } from "@/shared/lib/types/types"

export default function AuthPage() {

    const [state, formAction] = useActionState(UserAuth, null)

    const [emailError, setEmailError] = useState('')
    const [emailState, setEmailState] = useState<State | null>(null)

    const [loginError, setLoginError] = useState('')
    const [loginState, setLoginState] = useState<State | null>(null)
    const [loginLength, setLoginLength] = useState<number | null>()

    const [confirmError, setConfirmError] = useState('')
    const [confirmState, setConfirmState] = useState<State | null>(null)

    useEffect(() => {
        if(state?.success === false && state?.errors?.confirm) {
            setConfirmState('error')
            setConfirmError(state?.errors?.confirm)
        }
        if(state?.success === false && state.errors?.email) {
            setEmailState('error')
            setEmailError(state.errors.email)
        }
    }, [state])

    const CheckLoginLength = (event: React.ChangeEvent<HTMLInputElement>) => {
        const length = event.target.value.length
        setLoginLength(length)
    }

    const CheckLoginError = () => {
        if(loginLength === null || loginLength === undefined) return

        if(loginLength < 3) {
            setLoginError("Должно быть больше 3 символов!")
            setLoginState("error")
        } else if(loginLength > 42) {
            setLoginError("Должно быть меньше 42 символов!")
            setLoginState("error")
        } else {
            setLoginError("")
            setLoginState(null)
        }
    }

    return (
        <div className={style.page}>
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
                    type="text"
                    state={loginState}
                    info={loginError}
                    onChange={(event) => {
                        CheckLoginLength(event)
                    }}
                    onBlur={() => {
                        CheckLoginError()
                    }}/>
                    <Input
                    className={style.formInput}
                    placeholder="Enter Email"
                    label="Email"
                    name="email"
                    type="email"
                    state={emailState}
                    info={emailError}
                    required
                    onInvalid={(event) => {
                        event.preventDefault()

                        setEmailState("error")
                        setEmailError("Некорректный формат!")
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
                    state={confirmState}
                    info={confirmError}
                    LeftIcon={KeyIcon}/>
                    {state?.errors?.global && (
                        <p className={style.error}>{state.errors.global}</p>
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
        </div>
    )
}