import { BaseButtonProps } from '@/lib/types'
import style from './button.module.scss'

export const BaseButton = ({ 
    content = null, 
    Icon, 
    className,
    themeColor = 'dark',
    ...rest }: BaseButtonProps) => {

    return (
        <div 
        className={`
            ${style.buttonFrame}
            `}
        data-overflow={themeColor}
        >
            <button 
            className={`
                ${[style.button, className].filter(Boolean).join(" ")}
                `}
            {...rest}
            >
                {Icon && <Icon width={20}/>}
                {content}
            </button>
        </div>
    )
}

export default BaseButton