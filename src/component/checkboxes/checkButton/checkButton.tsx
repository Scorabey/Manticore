import { CheckButtonProps } from "@/lib/types/types"
import style from './checkButton.module.scss'
import { useId } from "react"

export const CheckButton = ({
    Icon,
    name,
    checked,
    onChange,
}: CheckButtonProps) => {

    const id = useId()
 
    return (
        <label 
        htmlFor={id}
        className={style.checkboxFrame}>
                <span className={style.filledOnPressed}></span>
                <input
                checked={checked}
                onChange={onChange}
                type="checkbox" 
                className={`${style.checkbox}`} 
                name={name}
                id={id}/>
                <Icon width={18} height={18}/>
        </label>
    )
}