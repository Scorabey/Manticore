import type { Button } from "@/lib/types";
import style from './button.module.scss'

export function SecondaryButton({ content, themeColor }: Button) {

    return (
        <div 
        className={style.buttonFrame}
        data-overflow={themeColor}
        >
            <button 
            className={style.button}
            >
                {content}
            </button>
        </div>
    )
}