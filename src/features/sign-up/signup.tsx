'use client'

import style from './signup.module.scss'
import { useState, useActionState, useEffect, useRef } from 'react'
import { UserAuth } from '@/entities/user/userAuth'
import { State } from '@/shared/lib/types/types'
import { Input } from '@/shared/ui/inputs/input'
import { KeyIcon } from '@heroicons/react/24/outline'
import { PrimaryButton } from '@/shared/ui/buttons/primary/button'

export const SignUp = () => {

    const inputLoginRef = useRef<HTMLInputElement>(null)

    const [state, formAction] = useActionState(UserAuth, null)

    const [emailError, setEmailError] = useState('')
    const [emailState, setEmailState] = useState<State | null>(null)

    const [loginError, setLoginError] = useState('')
    const [loginState, setLoginState] = useState<State | null>(null)

    const [passError, setPassError] = useState('')
    const [passState, setPassState] = useState<State | null>(null)

    const [confirmError, setConfirmError] = useState('')
    const [confirmState, setConfirmState] = useState<State | null>(null)

    useEffect(() => {
        if(state?.success !== false) return
        if(state?.errors?.confirm) {
            setConfirmState('error')
            setConfirmError(state?.errors?.confirm)
        }
        if(state.errors?.email) {
            setEmailState('error')
            setEmailError(state.errors.email)
        }
        if(state.errors?.login) {
            setLoginState('error')
            setLoginError(state.errors.login)
        }
    }, [state])

    useEffect(() => {
        inputLoginRef.current?.focus()
    }, [])

    const CheckLengthError = (
        objectLength: number | null,
        minLength: number,
        maxLength: number,
        column: 'login' | 'password' ) => {
        if(objectLength === null || objectLength === undefined) return

        if(column === 'login') {
            if(objectLength <= minLength) {
                setLoginError(`Должно быть больше ${minLength} символов!`)
                setLoginState("error")
            } else if(objectLength >= maxLength) {
                setLoginError(`Должно быть меньше ${maxLength} символов!`)
                setLoginState("error")
            } else {
                setLoginError("")
                setLoginState(null)
            }
        } else {
            if(objectLength <= minLength) {
                setPassError(`Должно быть больше ${minLength} символов!`)
                setPassState("error")
            } else if(objectLength >= maxLength) {
                setPassError(`Должно быть меньше ${maxLength} символов!`)
                setPassState("error")
            } else {
                setPassError("")
                setPassState(null)
            }
        }
    }

    return (
        <div className={style.formWrapper}>
            <form
            id="register-form"
            action={formAction}
            className={style.form}>
                <Input
                required
                ref={inputLoginRef}
                className={style.formInput}
                placeholder="Enter Login"
                label="Login"
                name="login"
                type="text"
                state={loginState}
                info={loginError}
                onBlur={(event) => {
                    CheckLengthError(event.target.value.length, 3, 42, 'login')
                }}
                onChange={() => {
                    setLoginError("")
                    setLoginState(null)
                }}/>
                <Input
                required
                className={style.formInput}
                placeholder="Enter Email"
                label="Email"
                name="email"
                type="email"
                state={emailState}
                info={emailError}
                onInvalid={(event) => {
                    event.preventDefault()

                    setEmailState("error")
                    setEmailError("Некорректный формат!")
                }}
                onChange={() => {
                    setEmailError("")
                    setEmailState(null)
                }}/>
                <Input
                required
                className={style.formInput}
                placeholder="Enter Password"
                label="Password"
                name="password"
                type="password"
                LeftIcon={KeyIcon}
                state={passState}
                info={passError}
                onBlur={(event) => {
                    CheckLengthError(event.target.value.length, 8, 255, 'password')
                }}
                onChange={() => {
                    setPassError("")
                    setPassState(null)
                }}/>
                <Input
                required
                className={style.formInput}
                placeholder="Confirm Password"
                label="Confirm Password"
                name="confirm"
                type="password"
                state={confirmState}
                info={confirmError}
                LeftIcon={KeyIcon}
                onChange={() => {
                    setConfirmError("")
                    setConfirmState(null)
                }}/>
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
        </div>
    )
}