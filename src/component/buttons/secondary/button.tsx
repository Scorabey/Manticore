import type { Button } from "@/lib/types";
import style from './button.module.scss'

export function Button({}: Button) {

    return (
        <div className={style.buttonFrame}></div>
    )
}