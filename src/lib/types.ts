import React from "react"

export type State = 'success' | 'error' | null

export type ThemeColor = 'blue' | 'red' | 'dark'

export type ButtonType = 'submit' | 'button' | 'reset'

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
    extends React.InputHTMLAttributes<HTMLInputElement> {
        content: string
        type?: 'checkbox' | 'radio'
        disabled?: boolean
    }