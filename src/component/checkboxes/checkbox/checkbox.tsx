import style from './checkbox.module.scss';
import { CheckBoxProps } from '@/lib/types';
import { useId } from 'react';

export const CheckBox = ({ 
    content,
    type = 'checkbox',
    disabled = false }: CheckBoxProps) => {

    const id = useId()

    return (
        <label 
        className={style.checkboxFrame}
        htmlFor={id}>
            <input 
            className={`${style[type]} ${style.input}`}
            type={type}
            id={id}
            disabled={disabled}
            />
            <span 
            className={style.content}
            >
                {content}
            </span>
        </label>
    )
}