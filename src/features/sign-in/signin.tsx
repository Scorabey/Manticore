'use client'

import style from './signin.module.scss'
import Link from 'next/link'
import { Input } from '@/shared/ui/inputs/input'
import { PrimaryButton } from '@/shared/ui/buttons/primary/button'
import { LockClosedIcon } from '@heroicons/react/24/outline'

export const SignIn = () => {

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
                action=""
                className={style.form}
                >
                    <Input                      // Login input
                    className={style.formInput}
                    placeholder='Enter login'
                    label='Login'
                    type='text'
                    name='login'
                    />
                    <Input                      // Password input
                    className={style.formInput}
                    placeholder='Password'
                    type='password'
                    name='password'
                    LeftIcon={LockClosedIcon}
                    />
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