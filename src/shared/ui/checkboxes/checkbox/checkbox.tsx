import style from './checkbox.module.scss';
import { CheckBoxProps } from '@/shared/lib/types/types';
import { useId, useRef, useEffect } from 'react';
import { Check } from 'react-feather';

export const CheckBox = ({ 
    children,
    name,
    type = 'checkbox',
    disabled = false,
    checked = false,
    indeterminate = false,
    onChange,
    ...rest }: CheckBoxProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const id = useId()

    useEffect(() => {
        if(inputRef.current && type === 'checkbox') {
            inputRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate, checked, type])

    return (
        <label 
        className={style.checkboxFrame}
        htmlFor={id}>
            <input
            ref={inputRef}
            type={type}
            name={name}
            id={id}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            className={`${style[type]} ${style.input}`}
            {...rest}
            />
            <span 
            className={style.content}
            >
                {children}
            </span>
            {type === 'checkbox'
            ? <Check width={14} height={14} strokeWidth={3}/> 
            : null}
        </label>
    )
}