import { useState } from 'react'
import { Control } from './control'
import style from './dropdown.module.scss'
import { DropdownOption, DropdownProps } from '@/lib/types'
import { Ultra } from 'next/font/google'
import { Options } from './options'

export const Dropdown = ({ 
    option }: DropdownProps) => {

    const [isOpen, setIsOpen] = useState(false)

    const [valueSelect, setValueSelect] = useState<string | number | null>(null)

    const handleSelect = (value: string | number) => {
        setValueSelect(value)
        setIsOpen(false)
    }

    const selectedOption = option.find((opt) => opt.value === valueSelect)

    return (
        <div className={style.dropdownFrame}>
            <Control 
            content={selectedOption ? selectedOption.label : 'Select value'}
            isOpen={isOpen}
            onToggle={setIsOpen}/>

            {isOpen 
            ? <div>
                {option.map((opt) => (
                    <Options
                    key={opt.value}
                    value={opt.value}
                    label={opt.label}
                    onSelect={handleSelect}
                    isSelected={valueSelect === opt.value}/>
                ))}
            </div>
            : null}
        </div>
    )
}