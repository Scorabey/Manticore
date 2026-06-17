import style from './input.module.scss';
import type { InputProps } from '@/lib/types';

export function Input({ 
    placeholder,
    RightIcon,
    LeftIcon }: InputProps) {

    return (
        <label 
        className={style.inputFrame}
        htmlFor='input'
        >
            <div className={style.inputWrapper}>
                {LeftIcon && <LeftIcon className={style.iconLeft} width={20}/>}
                <input 
                type="text"
                id='input'
                placeholder={placeholder}
                className={style.input}
                />
                {RightIcon && !LeftIcon ? <RightIcon className={style.iconRight} width={20}/> : null}
            </div>
        </label>
    )
}