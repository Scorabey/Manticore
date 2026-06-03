'use client'

import { useState } from 'react';
import style from './Inputs.module.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface Props {
    placeholder: string
}

export function SimpleInput({ placeholder }: Props) {
    const [isDisabled, setIsDisabled] = useState(false)

    return (
        <label className={`${style.inputWrapper}`}>
            <input type="text" className={style.input} placeholder={isDisabled ? 'Disabled' : placeholder} disabled={isDisabled}/>
        </label>
    )
}

export function IconLeftInput({ placeholder }: Props) {
    const [isDisabled, setIsDisabled] = useState(false)
    
    return (
        <label className={`${style.inputWrapper} ${style.inputIconLeft}`}>
            <MagnifyingGlassIcon className={style.inputIcon} width={20} height={20} />
            <input type="text" className={style.input} placeholder={isDisabled ? 'Disabled' : placeholder} disabled={isDisabled}/>
        </label>
    )                                         
}

export function IconRightInput({ placeholder }: Props) {
    const [isDisabled, setIsDisabled] = useState(false)

    return (
        <label className={`${style.inputWrapper} ${style.inputIconLeft}`}>
            <input type="text" className={style.input} placeholder={isDisabled ? 'Disabled' : placeholder} disabled={isDisabled}/>
            <MagnifyingGlassIcon className={style.inputIcon} width={20} height={20} />
        </label>
    )
}

export function InputSkeleton() {
    return (
        <div className={style.skeleton}>
            <div className={style.bling}></div>
        </div>
    )
}

export default SimpleInput