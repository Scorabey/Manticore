'use client'

import style from './signin.module.scss'
import Link from 'next/link'
import { Input } from '@/shared/ui/inputs/input'
import { PrimaryButton } from '@/shared/ui/buttons/primary/button'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { UserEntry } from '@/entities/user/userEntry'
import { useActionState, useState, useEffect, useRef } from 'react'
import { UserErrorFields } from '@/shared/lib/types/types'

export const SignIn = () => {

    const inputLoginRef = useRef<HTMLInputElement>(null)

    const [state, formAction, isPending] = useActionState(UserEntry, null)

    const [fields, setFields] = useState<UserErrorFields>({
        login: {
            message: null,
            state: null
        },
        password: {
            message: null,
            state: null
        },
        global: {
            message: null,
            state: null
        }
    })

    useEffect(() => {
        if(state?.success !== false) return
        if(state?.errors?.password) {
            setFields(prev => ({
                ...prev,
                password: {
                    message: state.errors?.password ?? null,
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
        if(state.errors?.global) {
            setFields(prev => ({
                ...prev,
                global: {
                    message: state.errors?.global ?? null,
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
                <div className={style.h3}>Welcome Back!</div>
                <div className={style.h4}>Please enter your details.</div>
            </span>
            <div 
            className={style.formWrapper}
            >
                <form 
                action={formAction}
                className={style.form}
                id='register-form'
                >
                    <Input                      // Login input
                    ref={inputLoginRef}
                    className={style.formInput}
                    placeholder='Enter login'
                    label='Login'
                    type='text'
                    name='login'
                    isLoading={isPending}
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
                    }}
                    />
                    <Input                      // Password input
                    className={style.formInput}
                    placeholder='Password'
                    type='password'
                    name='password'
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
                    }}
                    />
                    {fields.global?.state === 'error'
                    ? <span
                    className={style.formError}
                    >
                        {fields.global?.message}
                    </span>
                    : null}
                </form>
                <div 
                className={style.buttonFrame}
                >
                    <PrimaryButton              // Submit button
                    themeColor='dark'
                    className={style.createButton}
                    type='submit'
                    form='register-form'
                    >
                        Sign in
                    </PrimaryButton>
                </div>
            </div>
        </div>
        <span
        className={style.spanRedirect}
        >
            Don't have an account?
            <br />
            <Link
            className={style.spanLink}
            href={'/authorization/sign-up'}>
                Sign up
            </Link>
        </span>
        </>
    )
}