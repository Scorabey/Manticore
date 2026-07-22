'use client'

import style from './signup.module.scss'
import { useState, useActionState, useEffect, useRef } from 'react'
import { UserAuth } from '@/entities/user/userAuth'
import { UserErrorFields } from '@/shared/lib/types/types'
import { Input } from '@/shared/ui/inputs/input'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { PrimaryButton } from '@/shared/ui/buttons/primary/button'
import Link from 'next/link'

export const SignUp = () => {

    const inputLoginRef = useRef<HTMLInputElement>(null)

    const [state, formAction, isPending] = useActionState(UserAuth, null)

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
                    message: state.errors?.email ?? null,
                    state: "error"
                }
            }))
        }
        if(state.errors?.login) {
            setFields(prev => ({
                ...prev,
                login: {
                    message: state.errors?.login ?? null,
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
        <>
            <div 
            className={style.articleFrame}
            >
                <span 
                className={style.articleSubTitle}
                >
                    <span 
                    className={style.h3}
                    >
                        Create Your Account
                    </span>
                    <br />
                    <span 
                    className={style.h4}
                    >
                        to get started.
                    </span>
                </span>
                <div 
                className={style.formWrapper}
                >
                    <form 
                    action={formAction}
                    className={style.form}
                    id='register-form'
                    >
                        <Input              // Login input
                        ref={inputLoginRef}
                        className={style.formInput}
                        placeholder='Enter login'
                        label='Login'
                        name='login'
                        type='text'
                        isLoading={isPending}
                        info={fields.login?.message}
                        state={fields.login?.state}
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
                        <Input              // Email input
                        className={style.formInput}
                        placeholder='Enter email'
                        label='Email'
                        name='email'
                        type='email'
                        isLoading={isPending}
                        info={fields.email?.message}
                        state={fields.email?.state}
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
                        <Input              // Password input
                        required
                        className={style.formInput}
                        placeholder="Enter Password"
                        name="password"
                        type="password"
                        LeftIcon={LockClosedIcon}
                        isLoading={isPending}
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
                        <Input              // Confirm password input
                        required
                        className={style.formInput}
                        placeholder="Confirm Password"
                        name="confirm"
                        type="password"
                        isLoading={isPending}
                        state={fields.confirm?.state}
                        info={fields.confirm?.message}
                        LeftIcon={LockClosedIcon}
                        onChange={() => {
                            setFields(prev => ({
                                ...prev,
                                confirm: {
                                    message: null,
                                    state: null
                                }
                            }))
                        }}/>
                    </form>
                    <div 
                    className={style.buttonFrame}
                    >
                        <PrimaryButton      // Submit button
                        form='register-form'
                        className={style.createButton}
                        isLoading={isPending}
                        themeColor="dark"
                        type="submit">
                            Sign up
                        </PrimaryButton>
                    </div>
                </div>
            </div>
            <span
            className={style.spanRedirect}
            >
                Do you already have an account?
                <br />
                <Link
                className={style.spanLink}
                href={'/authorization/sign-in'}
                >
                    Sign in
                </Link>
            </span>
        </>
    )
}