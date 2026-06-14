import React from "react"

export type State = 'success' | 'error'

export type ThemeColor = 'blue' | 'red' | 'dark'

export type ButtonType = 'submit' | 'button' | 'reset'

export interface Input 
    extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    isDisabled?: boolean
    state?: State | null
    Icon?: React.ReactNode
    maxCharacters?: number
    requiredField?: boolean
}

export interface Button 
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    content: string
    themeColor?: ThemeColor
    Icon?: React.ReactNode
    className?: string
}