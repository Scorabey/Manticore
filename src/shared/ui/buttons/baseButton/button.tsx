import { BaseButtonProps } from '@/shared/lib/types/types'
import style from './button.module.scss'
import { Loader } from 'react-feather';

export const BaseButton = ({ 
    children,
    Icon, 
    className,
    disabled = false,
    onClick,
    ...rest }: BaseButtonProps) => {

    const IsFilledContent = children !== null;

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
                {disabled ? 'Disabled' : children}
            </button>
        </div>
    )
}

export const BaseButtonSkeleton = ({
    onlyIcon = false
}) => {

    return (
        <div 
        className={`
        ${style.buttonFrame}
        `}>
            <button 
            className={`
            ${style.button}
            ${style.buttonSkeleton}
            ${onlyIcon ? undefined : style.content}
            `}>
                <Loader width={20} height={20}/> {onlyIcon ? null : 'Loading'}
            </button>
        </div>
    )
}