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
    const [loginLength, setLoginLength] = useState<number | null>(null)

    const [passError, setPassError] = useState('')
    const [passState, setPassState] = useState<State | null>(null)
    const [passLength, setPassLength] = useState<number | null>(null)

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

    useEffect(() => {
        inputLoginRef.current?.focus()
    }, [])

    const CheckLoginLength = (event: React.ChangeEvent<HTMLInputElement>) => {
        const length = event.target.value.length
        setLoginLength(length)
    }

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
                ref={inputLoginRef}
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
                    CheckLengthError(loginLength, 3, 42, 'login')
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
                LeftIcon={KeyIcon}
                state={passState}
                info={passError}
                onChange={(event) => {
                    setPassLength(event.target.value.length)
                }}
                onBlur={() => {
                    CheckLengthError(passLength, 8, 255, 'password')
                }}/>
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
        </div>
    )
}