'use client'

import { useRef, useState, useEffect } from 'react'
import { Control } from './control'
import style from './dropdown.module.scss'
import { DropdownListType, DropdownProps } from '@/lib/types'
import { Options } from './options'

export const Dropdown = ({
    setContent,
    option,
    label,
    multy = false }: DropdownProps) => {

    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const [isOpen, setIsOpen] = useState(false)

    const [valueSelect, setValueSelect] = useState<DropdownListType>(
        multy ? [] : null
    );

    const handleSelect = (value: string | number) => {
        if(multy) {
            setValueSelect((prev) => {
                const currentArr = Array.isArray(prev) ? prev : []
                if(currentArr.includes(value)) {
                    return currentArr.filter((val) => val !== value)
                } else {
                    return [...currentArr, value]
                }
            })
        } else {
            setValueSelect(value)
            setIsOpen(false)
        }
    }

    const isOptionSelect = (value: string | number) => {
        if(multy && Array.isArray(valueSelect)) {
            return valueSelect.includes(value)
        }
        return valueSelect === value
    }

    const getDisplayContent = () => {
        if(multy && Array.isArray(valueSelect)) {
            if(valueSelect.length === 0) return setContent

            return option
                .filter((opt) => valueSelect.includes(opt.value))
                .map((opt) => opt.label)
                .join(', ')
        } else {
            const selectedOption = option.find((opt) => opt.value === valueSelect)
            return selectedOption ? selectedOption.label : setContent
        }
    }

    const hasValue = multy
        ? (Array.isArray(valueSelect) && valueSelect.length > 0)
        : valueSelect !== null

    return (
        <div 
        ref={dropdownRef}
        className={style.dropdownFrame}>
            <Control 
            children={getDisplayContent()}
            isOpen={isOpen}
            onToggle={setIsOpen}
            className={isOpen ? style.unRoundBorder : ''}
            isValueState={hasValue}
            label={label}
            />

            {isOpen 
            ? <div className={style.dropdownList}>
                {option.map((opt, index) => (
                    <Options
                    key={opt.value}
                    value={opt.value}
                    onSelect={handleSelect}
                    isSelected={isOptionSelect(opt.value)}
                    multy={multy}
                    style={{
                        animationDelay: `${index * 100}ms`
                    }}>
                        <span>{opt.label}</span>
                    </Options>
                ))}
            </div>
            : null}
        </div>
    )
}