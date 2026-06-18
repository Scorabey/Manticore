import React from "react"

export type State = 'success' | 'error'

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
}

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    content: string
    themeColor?: ThemeColor
    Icon?: React.ReactNode
    className?: string
}