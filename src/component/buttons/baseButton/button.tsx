import { BaseButtonProps } from '@/lib/types'
import style from './button.module.scss'

export const BaseButton = ({ 
    content = null, 
    Icon, 
    className,
    disabled = false,
    onClick,
    ...rest }: BaseButtonProps) => {

    const IsFilledContent = content !== null;

    return (
        <div 
        className={`
            ${style.buttonFrame}
            `}
        >
            <button 
            className={`
                ${[style.button, className].filter(Boolean).join(" ")}
                ${IsFilledContent ? style.content : undefined}
                `}
            onClick={onClick}
            disabled={disabled}
            {...rest}
            >
                {Icon && <Icon width={20}/>}
                {disabled ? 'Disabled' : content}
            </button>
        </div>
    )
}

export default BaseButton