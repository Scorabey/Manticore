import style from './control.module.scss'
import { ControlProps } from '@/lib/types/types'
import { ChevronDown, Loader } from 'react-feather'

export const Control = ({ 
    children,
    label,
    Icon,
    disabled,
    isOpen,
    onToggle,
    className,
    isValueState,
    ...rest }: ControlProps) => {

    const handleClick = () => {
        onToggle(!isOpen)
    }

    return (
        <div 
        className={style.buttonFrame}
        >
            <span className={style.label}>{label}</span>
            <button 
            {...rest}
            className={`
                ${style.button}
                ${isValueState ? style.value : ''}
                ${className}`}
            disabled={disabled}
            onClick={handleClick}
            >
                {Icon ? <Icon width={20} height={20}/> : null}
                <span className={style.content}>{children}</span>
                <ChevronDown width={18} height={18}/>
            </button>
        </div>
    )
}

export const ControlSkeleton = () => {
    return (
        <div className={`${style.buttonFrame} ${style.skeletonFrame}`}>
            <button className={`${style.button} ${style.buttonSkeleton}`}>
                <Loader width={20} height={20}/>
            </button>
        </div>
    )
}