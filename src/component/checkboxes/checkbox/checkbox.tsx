import style from './checkbox.module.scss';
import { CheckBoxProps } from '@/lib/types';

export const CheckBox = ({ content }: CheckBoxProps) => {

    return (
        <div 
        className={style.checkboxFrame}>
            <input 
            className={style.checkbox}
            />
            <span 
            className={style.content}
            >
                {content}
            </span>
        </div>
    )
}