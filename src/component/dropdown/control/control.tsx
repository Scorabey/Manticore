import style from './control.module.scss'
import { ControlProps } from '@/lib/types'
import { ChevronDown } from 'react-feather'

export const Control = ({ 
    content,
    label,
    Icon,
    disabled,
    isOpen,
    onToggle,
    id,
    className,
    isValueState,
    ...rest }: ControlProps) => {

    const handleClick = () => {
        onToggle(!isOpen)
    }

    const handleBlur = () => {
        onToggle(false)
    }

    return (
        <div 
        className={style.buttonFrame}
        >
            <span className={style.label}>{label}</span>
            <button 
            {...rest}
            id={id}
            className={`
                ${style.button}
                ${isValueState ? style.value : ''}
                ${className}`}
            disabled={disabled}
            onClick={handleClick}
            onBlur={handleBlur}
            >
                {Icon ? <Icon width={20} height={20}/> : null}
                <span className={style.content}>{content}</span>
                <ChevronDown width={18} height={18}/>
            </button>
        </div>
    )
}