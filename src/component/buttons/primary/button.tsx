import type { Button } from "@/lib/types";
import style from './button.module.scss'

export function Button({ content }: Button) {

    return (
        <div className={style.buttonFrame}>
            <button className={style.button}>
                {content}
            </button>
        </div>
    )
}