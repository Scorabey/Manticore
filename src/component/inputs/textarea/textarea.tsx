'use client'

import { useState, useId } from 'react'
import style from './textarea.module.scss'
import type { InputProps } from '@/lib/types'

export const Textarea = ({ 
    placeholder,
    disabled = false,
    state = null, 
    maxCharacters = 255,
    requiredField = false,
    className
    }: InputProps) => {
    const [value, setValue] = useState('')

    const id = useId()

    const showRequired = requiredField && value.length === 0 && state === null

    const showCharacterField = value.length - maxCharacters

    const manyCharacterError = value.length > maxCharacters

    return (
        <label 
        htmlFor={id} 
        className={`
            ${style.wrapperTextarea} 
            ${state ? style[state] : ''}
            ${showRequired ? style.field : ''}
            ${manyCharacterError ? style.error : ''}`
        }
        data-overflow={`${showCharacterField}`}
        >
            <span className={`${style.label}`}>Textarea</span>
            <textarea
            value={value}
            onChange={(event) => setValue(event.target.value)}
            id={id}
            className={`
                ${className ?? ''}
                ${style.textarea} 
                ${state ? style[state] : ''}
                ${manyCharacterError ? style.error : ''}`} 
            placeholder={disabled ? 'Disabled' : placeholder} 
            disabled={disabled}
            />
        </label>
    )
}

export function TextareaSkeleton() {
    return (
        <div className={style.skeleton}>
            <div className={style.bling}></div>
        </div>
    )
}

export default Textarea