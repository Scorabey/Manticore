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
    ...rest }: ControlProps) => {

    const handleFocus = () => {
        onToggle(true)
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
            className={style.button}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            >
                {Icon ? <Icon width={20} height={20}/> : null}
                <span className={style.content}>{content}</span>
                <ChevronDown width={18} height={18}/>
            </button>
        </div>
    )
}