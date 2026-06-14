import type { Button } from "@/lib/types";
import style from './button.module.scss'

export function SecondaryButton({ 
    content, 
    themeColor = 'dark', 
    Icon,
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
                {Icon && Icon}
                {content}
            </button>
        </div>
    )
}