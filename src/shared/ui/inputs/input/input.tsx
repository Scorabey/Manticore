'use client'

import style from './input.module.scss';
import type { InputProps } from '@/shared/lib/types/types';
import { useId } from 'react';
import { ExclamationCircleIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';

export const Input = ({ 
    placeholder,
    RightIcon,
    LeftIcon,
    label,
    state = null,
    disabled = false,
    info = null,
    className,
    ref,
    isLoading,
    ...props }: InputProps) => {

    const id = useId()

    if (isLoading) {
        return <InputSkeleton />
    }

    return (
        <div className={`${style.frame}`}>
            {label && <span className={style.label}>{label}</span>}
            <label
            className={`
                ${style.inputFrame}
                ${state && style[state]}
                ${className ?? ''}
                `}
            htmlFor={id}
            >
                <div className={style.inputWrapper}>
                    {LeftIcon && <LeftIcon className={`${style.iconLeft} ${style.icon}`} width={20}/>}
                    <input
                    {...props}
                    ref={ref}
                    id={id}
                    placeholder={disabled ? 'Disabled' : placeholder}
                    className={`${style.input}`}
                    disabled={disabled}
                    />
                    {RightIcon && !LeftIcon ? <RightIcon className={`${style.iconRight} ${style.icon}`} width={20}/> : null}
                </div>
            </label>
            {info && <span 
            className={`
                ${style.requiredField}
                ${state && style[state]}`}>
                    {state === null ? <ExclamationCircleIcon width={20}/> : null}
                    {state === 'success' ? <CheckCircleIcon width={20}/> : null}
                    {state === 'error' ? <XCircleIcon width={20}/> : null}
                    {info}
                    </span>}
        </div>
    )
}

export const InputSkeleton = () => {
    return (
        <div className={`${style.frame} ${style.skeleton}`}>
            <div className={style.bling}></div>
            <span className={style.label}></span>
            <label className={`${style.inputFrame} ${style.elSkeleton}`}>
                <div className={style.inputWrapper}>
                    <input
                    className={`${style.input}`}
                    />
                </div>
            </label>
            <span className={`${style.requiredField}`}></span>
        </div>
    )
}