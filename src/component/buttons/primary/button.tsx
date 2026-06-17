import type { ButtonProps } from "@/lib/types";
import style from './button.module.scss'

export function PrimaryButton({ 
    content, 
    themeColor = 'dark',
    className,
    ...rest 
    }: ButtonProps) {

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