import style from './Inputs.module.scss';
import { Input } from '@/lib/types';


export function SimpleInput({ placeholder, isDisabled = false, state = null }: Input) {

    return (
        <label className={`${style.inputWrapper} ${state ? style[state] : ''}`}>
            <input 
            type="text" 
            className={style.input} 
            placeholder={isDisabled ? 'Disabled' : placeholder} 
            disabled={isDisabled}
            />
        </label>
    )
}

export function IconLeftInput({ placeholder, isDisabled = false, state = null, Icon = null }: Input) {
    
    return (
        <label className={`${style.inputWrapper} ${style.inputIconLeft} ${state ? style[state] : ''}`}>
            {Icon && <Icon className={style.inputIcon} width={20} height={20} />}
            <input 
            type="text" 
            className={style.input} 
            placeholder={isDisabled ? 'Disabled' : placeholder} 
            disabled={isDisabled}
            />
        </label>
    )                                         
}

export function IconRightInput({ placeholder, isDisabled = false, state = null, Icon = null }: Input) {

    return (
        <label className={`${style.inputWrapper} ${style.inputIconLeft} ${state ? style[state] : ''}`}>
            <input 
            type="text" 
            className={style.input} 
            placeholder={isDisabled ? 'Disabled' : placeholder} 
            disabled={isDisabled}
            />
            {Icon && <Icon className={style.inputIcon} width={20} height={20} />}
        </label>
    )
}

export function InputSkeleton() {
    return (
        <div className={style.skeleton}>
            <div className={style.bling}></div>
        </div>
    )
}

export default SimpleInput