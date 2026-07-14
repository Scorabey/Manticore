'use client'

import { useState, useId } from 'react'
import style from './textarea.module.scss'
import type { InputProps } from '@/shared/lib/types/types'

export const Textarea = ({ 
    placeholder,
    disabled = false,
    state = null, 
    maxCharacters = 255,
    info = null,
    className,
    name
    }: InputProps) => {
    const [value, setValue] = useState('')

    const id = useId()

    const showRequired = info && value.length === 0 && state === null

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
            name={name}
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
        <label className={`${style.wrapperTextarea} ${style.skeleton}`}>
            <div className={`${style.bling}`}></div>
            <span className={`${style.label} ${style.labelSkeleton}`}></span>
            <textarea className={`${style.textarea} ${style.textareaSkeleton}`}/>
        </label>
    )
}