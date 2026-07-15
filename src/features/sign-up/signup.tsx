'use client'

import style from './signup.module.scss'
import { useState, useActionState, useEffect, useRef } from 'react'
import { UserAuth } from '@/entities/user/userAuth'
import { UserErrorFields } from '@/shared/lib/types/types'
import { Input } from '@/shared/ui/inputs/input'
import { KeyIcon } from '@heroicons/react/24/outline'
import { PrimaryButton } from '@/shared/ui/buttons/primary/button'

export const SignUp = () => {

    const inputLoginRef = useRef<HTMLInputElement>(null)

    const [state, formAction] = useActionState(UserAuth, null)

    const [fields, setFields] = useState<UserErrorFields>({
        login: {
            message: null,
            state: null
        },
        email: {
            message: null,
            state: null
        },
        password: {
            message: null,
            state: null
        },
        confirm: {
            message: null,
            state: null
        }
    })

    useEffect(() => {
        if(state?.success !== false) return
        if(state?.errors?.confirm) {
            setFields(prev => ({
                ...prev,
                confirm: {
                    message: state.errors?.confirm ?? null,
                    state: "error"
                }
            }))
        }
        if(state.errors?.email) {
            setFields(prev => ({
                ...prev,
                email: {
                    message: state.errors?.confirm ?? null,
                    state: "error"
                }
            }))
        }
        if(state.errors?.login) {
            setFields(prev => ({
                ...prev,
                login: {
                    message: state.errors?.confirm ?? null,
                    state: "error"
                }
            }))
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
                setFields(prev => ({
                    ...prev,
                    login: {
                        message: `Должно быть больше ${minLength} символов!`,
                        state: "error"
                    }
                }))
            } else if(objectLength >= maxLength) {
                setFields(prev => ({
                    ...prev,
                    login: {
                        message: `Должно быть меньше ${maxLength} символов!`,
                        state: "error"
                    }
                }))
            } else {
                setFields(prev => ({
                    ...prev,
                    login: {
                        message: null,
                        state: null
                    }
                }))
            }
        } else {
            if(objectLength <= minLength) {
                setFields(prev => ({
                    ...prev,
                    password: {
                        message: `Должно быть больше ${minLength} символов!`,
                        state: "error"
                    }
                }))
            } else if(objectLength >= maxLength) {
                setFields(prev => ({
                    ...prev,
                    password: {
                        message: `Должно быть меньше ${maxLength} символов!`,
                        state: "error"
                    }
                }))
            } else {
                setFields(prev => ({
                    ...prev,
                    password: {
                        message: null,
                        state: null
                    }
                }))
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
                state={fields.login?.state}
                info={fields.login?.message}
                onBlur={(event) => {
                    CheckLengthError(event.target.value.length, 3, 42, 'login')
                }}
                onChange={() => {
                    setFields(prev => ({
                        ...prev,
                        login: {
                            message: null,
                            state: null
                        }
                    }))
                }}/>
                <Input
                required
                className={style.formInput}
                placeholder="Enter Email"
                label="Email"
                name="email"
                type="email"
                state={fields.email?.state}
                info={fields.email?.message}
                onInvalid={(event) => {
                    event.preventDefault()

                    setFields(prev => ({
                        ...prev,
                        email: {
                            message: "Некоректный формат поля!",
                            state: "error"
                        }
                    }))
                }}
                onChange={() => {
                    setFields(prev => ({
                        ...prev,
                        email: {
                            message: null,
                            state: null
                        }
                    }))
                }}/>
                <Input
                required
                className={style.formInput}
                placeholder="Enter Password"
                label="Password"
                name="password"
                type="password"
                LeftIcon={KeyIcon}
                state={fields.password?.state}
                info={fields.password?.message}
                onBlur={(event) => {
                    CheckLengthError(event.target.value.length, 8, 255, 'password')
                }}
                onChange={() => {
                    setFields(prev => ({
                        ...prev,
                        password: {
                            message: null,
                            state: null
                        }
                    }))
                }}/>
                <Input
                required
                className={style.formInput}
                placeholder="Confirm Password"
                label="Confirm Password"
                name="confirm"
                type="password"
                state={fields.confirm?.state}
                info={fields.confirm?.message}
                LeftIcon={KeyIcon}
                onChange={() => {
                    setFields(prev => ({
                        ...prev,
                        confirm: {
                            message: null,
                            state: null
                        }
                    }))
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