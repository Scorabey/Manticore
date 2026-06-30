import React from "react"

export type State = 'success' | 'error' | null

export type ThemeColor = 'blue' | 'red' | 'dark'

export type ButtonType = 'submit' | 'button' | 'reset'

export type OptionValue = string | number

export interface DropdownOption {
    value: string | number
    label: string
}

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    state?: State | null
    RightIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    LeftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    maxCharacters?: number
    requiredField?: boolean
    label?: string
}

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    content: string
    themeColor?: ThemeColor
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    className?: string
}

export interface BaseButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "content"> {
    content?: string | null 
    themeColor?: ThemeColor
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    className?: string
}

export interface CheckBoxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
        content: string
        name: string
        type?: 'checkbox' | 'radio'
        indeterminate?: boolean
}

export interface ControlProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onToggle'> {
        content: string
        label?: string | null
        Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
        isOpen: boolean
        onToggle: (isOpen: boolean) => void
    }

export interface OptionsProps {
    value: OptionValue
    label: OptionValue
    onSelect: (value: OptionValue) => void
    isSelected: boolean
}

export interface DropdownProps {
    option: DropdownOption[]
}