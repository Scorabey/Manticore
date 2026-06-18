'use client'

import style from './input.module.scss';
import type { InputProps } from '@/lib/types';
import { useState, useId } from 'react';

export function Input({ 
    placeholder,
    RightIcon,
    LeftIcon,
    disabled = false,
    type = 'text',
    className, }: InputProps) {

    const id = useId()

    const [value, setValue] = useState('')

    const isFilled = value.length > 0

    return (
        <label
        className={style.inputFrame}
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
    )
}