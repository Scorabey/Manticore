import type { Button } from "@/lib/types";
import style from './button.module.scss'

export function PrimaryButton({ 
    content, 
    themeColor = 'dark',
    className,
    ...rest 
    }: Button) {

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