import style from './Inputs.module.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '@/lib/types';


export function SimpleInput({ placeholder, isDisabled = false, state = null }: Input) {

    return (
        <label className={`${style.inputWrapper}`}>
            <input 
            type="text" 
            className={style.input} 
            placeholder={isDisabled ? 'Disabled' : placeholder} 
            disabled={isDisabled}
            />
        </label>
    )
}

export function IconLeftInput({ placeholder, isDisabled, state = null }: Input) {
    
    return (
        <label className={`${style.inputWrapper} ${style.inputIconLeft}`}>
            <MagnifyingGlassIcon className={style.inputIcon} width={20} height={20} />
            <input 
            type="text" 
            className={style.input} 
            placeholder={isDisabled ? 'Disabled' : placeholder} 
            disabled={isDisabled}
            />
        </label>
    )                                         
}

export function IconRightInput({ placeholder, isDisabled, state = null }: Input) {

    return (
        <label className={`${style.inputWrapper} ${style.inputIconLeft}`}>
            <input 
            type="text" 
            className={style.input} 
            placeholder={isDisabled ? 'Disabled' : placeholder} 
            disabled={isDisabled}
            />
            <MagnifyingGlassIcon className={style.inputIcon} width={20} height={20} />
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