import { RowDataPacket } from "mysql2"
import React, { CSSProperties, RefObject } from "react"

export type State = 'success' | 'error' | null

export type ThemeColor = 'blue' | 'red' | 'dark'

export type ButtonType = 'submit' | 'button' | 'reset'

export type OptionValue = string | number

export type DropdownListType = string | number | null | (string | number)[]

export interface DropdownOption {
    value: string | number
    label: string
}

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    state?: State | null
    RightIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    LeftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    maxCharacters?: number
    requiredField?: boolean
    label?: string
}

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    children: React.ReactNode
    themeColor?: ThemeColor
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    link?: string | null
}

export interface BaseButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "content"> {
    children?: React.ReactNode | null 
    themeColor?: ThemeColor
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export interface CheckBoxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
        children: React.ReactNode
        name: string
        type?: 'checkbox' | 'radio'
        indeterminate?: boolean
}

export interface ControlProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onToggle'> {
        children: React.ReactNode
        label?: string | null
        Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
        isOpen: boolean
        onToggle: (isOpen: boolean) => void
        isValueState: boolean
    }

export interface OptionsProps {
    value: OptionValue
    children: React.ReactNode
    onSelect: (value: OptionValue) => void
    isSelected: boolean
    multy: boolean
    style: CSSProperties
}

export interface DropdownProps {
    setContent: string
    option: DropdownOption[]
    label?: string
    multy?: true | false
}

export interface User extends RowDataPacket {
    id: number
    login: string
    password: string
    email: string
    age: number | null
}

export type PublicUser = Omit<User, "password">