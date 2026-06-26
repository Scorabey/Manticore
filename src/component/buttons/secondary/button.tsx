import type { ButtonProps } from "@/lib/types";
import style from './button.module.scss';
import { Loader } from 'react-feather';

export const SecondaryButton = ({ 
    content, 
    themeColor = 'dark', 
    Icon,
    className,
    ...rest 
    }: ButtonProps) => {

    return (
        <div 
        className={style.buttonFrame}
        data-overflow={themeColor}
        >
            <button 
            className={[style.button, className].filter(Boolean).join(" ")}
            {...rest}
            >
                {Icon && <Icon width={20}/>}
                {content}
            </button>
        </div>
    )
}

export const SecondaryButtonSkeleton = ({
    themeColor = 'dark'
}) => {

    return (
        <div 
        className={`
        ${style.buttonFrame}
        `}
        data-overflow={themeColor}>
            <button 
            className={`
            ${style.button}
            ${style.buttonSkeleton}
            `}>
                <Loader width={20} height={20}/>
            </button>
        </div>
    )
}