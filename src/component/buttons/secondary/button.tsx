import type { Button } from "@/lib/types";
import style from './button.module.scss'

export function SecondaryButton({ content, themeColor = 'dark', Icon = null, isDisabled = false }: Button) {

    return (
        <div 
        className={style.buttonFrame}
        data-overflow={themeColor}
        >
            <button 
            className={style.button}
            disabled={isDisabled}
            >
                {Icon && <Icon className={style.inputIcon} width={18} height={18} />}
                {content}
            </button>
        </div>
    )
}