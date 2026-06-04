import style from './textarea.module.scss'
import { Input } from '@/lib/types'

export function Textarea({ placeholder, isDisabled = false, state = null }: Input) {

    return (
        <label htmlFor="textarea" className={`${style.wrapperTextarea}`}>
            <span className={`${style.label}`}>Textarea</span>
            <textarea 
            name="textarea" 
            className={`${style.textarea} ${state ? style[state] : ''}`} 
            placeholder={isDisabled ? 'Disabled' : placeholder} 
            disabled={isDisabled}
            />
        </label>
    )
}