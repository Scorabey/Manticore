'use client'

import { useEffect, useState } from 'react'
import style from './textarea.module.scss'
import { Input } from '@/lib/types'

export function Textarea({ 
    placeholder, 
    isDisabled = false, 
    state = null, 
    dataOverflow = 0,
    requiredField = false }: Input) {
    const [value, setValue] = useState('')

    const showRequired = requiredField && value.length === 0 && state === null

    const showCharacterField = value.length - dataOverflow

    const manyCharacterError = value.length > dataOverflow

    return (
        <label 
        htmlFor="textarea" 
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
            name="textarea" 
            className={`
                ${style.textarea} 
                ${state ? style[state] : ''}
                ${manyCharacterError ? style.error : ''}`} 
            placeholder={isDisabled ? 'Disabled' : placeholder} 
            disabled={isDisabled}
            />
        </label>
    )
}