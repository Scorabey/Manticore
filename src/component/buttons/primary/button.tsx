import type { Button } from "@/lib/types";
import style from './button.module.scss'

export function PrimaryButton({ content, themeColor = 'dark', isDisabled = false }: Button) {

    return (
        <div 
        className={style.buttonFrame}
        data-overflow={themeColor}
        >
            <button 
            className={style.button}
            disabled={isDisabled}
            >
                {content}
            </button>
        </div>
    )
}