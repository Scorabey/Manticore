import { useId } from 'react';
import style from './switcher.module.scss';
import { CheckBoxProps } from '@/lib/types';

export const Switcher = ({ 
    children, 
    name,
    disabled = false,
    checked = false,
    className,
    onChange,
    ...rest }: CheckBoxProps) => {

    const id = useId()

    return (
        <label 
        className={style.switcherFrame}
        htmlFor={id}>
            <input
            {...rest}
            className={`${style.switcher} ${style.className}`}
            id={id}
            name={name}
            type='checkbox'
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            />
            <span 
            className={style.content}
            >
                {children}
            </span>
        </label>
    )
}