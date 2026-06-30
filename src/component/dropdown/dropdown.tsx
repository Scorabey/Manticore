import { useId, useState } from 'react'
import { Control } from './control'
import style from './dropdown.module.scss'
import { DropdownProps } from '@/lib/types'
import { Options } from './options'

export const Dropdown = ({ 
    option,
    label,
    multy }: DropdownProps) => {

    const id = useId()

    const [isOpen, setIsOpen] = useState(false)

    const [valueSelect, setValueSelect] = useState<string | number | null>(null)

    const handleSelect = (value: string | number) => {
        setValueSelect(value)
        setIsOpen(false)
    }

    const selectedOption = option.find((opt) => opt.value === valueSelect)

    return (
        <label 
        className={style.dropdownFrame}
        htmlFor={id}>
            <Control 
            content={selectedOption ? selectedOption.label : 'Select value'}
            isOpen={isOpen}
            onToggle={setIsOpen}
            className={isOpen ? style.unRoundBorder : ''}
            id={id}
            isValueState={valueSelect !== null}
            label={label}/>

            {isOpen 
            ? <div className={style.dropdownList}>
                {option.map((opt) => (
                    <Options
                    key={opt.value}
                    value={opt.value}
                    onSelect={handleSelect}
                    isSelected={valueSelect === opt.value}
                    multy={multy}>
                        <span>{opt.label}</span>
                    </Options>
                ))}
            </div>
            : null}
        </label>
    )
}