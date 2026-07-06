import css from './options.module.scss'
import { OptionsProps } from '@/lib/types'
import { Check } from 'react-feather'

export const Options = ({ 
    children,
    value,
    onSelect,
    isSelected,
    multy,
    style }: OptionsProps) => {
    
    return (
        <div 
        className={`
            ${css.selectFrame}
            ${isSelected ? css.selected : ''}
            ${multy ? css.multySekected : ''}`}
        style={style}    
        data-value={value}
        onPointerDown={() => onSelect(value)}>
            {children}
            {multy ? <Check width={20} height={20}/> : null}
        </div>
    )
}