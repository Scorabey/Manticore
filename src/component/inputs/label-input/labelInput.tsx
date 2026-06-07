import { Input } from '@/lib/types';
import style from './labelInput.module.scss'

export function LabelInput({ placeholder, Icon, requiredField, isDisabled, state }: Input) {
    
    return (
        <label 
        className={style.wrapperInput}
        >
            <span 
            className={style.label}
            >Label</span>
            <input
            type="text"
            className={`
                ${style.input} 
                ${state ? style[state] : ''}
                `}
            placeholder={placeholder}
            disabled={false}
            />
            {Icon && <Icon className={style.requiredIcon} width={20} height={20} />}
            <span className={style.requiredField}>This is required field!</span>
        </label>
    )
}