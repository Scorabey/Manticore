import style from './options.module.scss'
import { OptionsProps } from '@/lib/types'
import { Check } from 'react-feather'

export const Options = ({ 
    label,
    value,
    onSelect,
    isSelected }: OptionsProps) => {
    
    return (
        <div 
        className={`
            ${style.selectFrame}
            ${isSelected ? style.selected : ''}`}
        data-value={value}
        onMouseDown={() => onSelect(value)}>
            <span>{label}</span>
            <Check width={20} height={20}/>
        </div>
    )
}