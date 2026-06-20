'use client'

import style from './input.module.scss';
import type { InputProps } from '@/lib/types';
import { useState, useId } from 'react';
import { InformationCircleIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';

export const Input = ({ 
    placeholder,
    RightIcon,
    LeftIcon,
    label,
    state = null,
    requiredField = false,
    disabled = false,
    type = 'text',
    className, }: InputProps) => {

    const id = useId()

    const [value, setValue] = useState('')

    const isFilled = value.length > 0

    return (
        <div className={`${style.frame}`}>
            {label && <span className={style.label}>{label}</span>}
            <label
            className={`
                ${style.inputFrame}
                ${state && style[state]}
                `}
            htmlFor={id}
            >
                <div className={style.inputWrapper}>
                    {LeftIcon && <LeftIcon className={`${style.iconLeft} ${style.icon}`} width={20}/>}
                    <input
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    type={type}
                    id={id}
                    placeholder={disabled ? 'Disabled' : placeholder}
                    className={`
                        ${style.input} 
                        ${className ?? ''}
                        ${isFilled ? style.filled : ''}
                        `}
                    disabled={disabled}
                    />
                    {RightIcon && !LeftIcon ? <RightIcon className={`${style.iconRight} ${style.icon}`} width={20}/> : null}
                </div>
            </label>
            {requiredField && <span 
            className={`
                ${style.requiredField} 
                ${state && style[state]}`}>
                    {state === null ? <InformationCircleIcon width={20}/> : null}
                    {state === 'success' ? <CheckCircleIcon width={20}/> : null}
                    {state === 'error' ? <XCircleIcon width={20}/> : null}
                    This is required field
                    </span>}
        </div>
    )
}

export default Input