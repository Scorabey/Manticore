import type { ButtonProps } from "@/lib/types";
import style from './button.module.scss';
import { Loader } from 'react-feather';

export const PrimaryButton = ({ 
    content, 
    themeColor = 'dark',
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
                {content}
            </button>
        </div>
    )
}

export const PrimaryButtonSkeleton = ({
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