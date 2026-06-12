import React from "react"

export enum State {
    success = 'success',
    error = 'error'
}

export interface Input {
    placeholder: string
    isDisabled?: boolean
    state?: State | null
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | null
    dataOverflow?: number
    requiredField?: boolean
}

export interface Button {
    content: string
    themeColor: 'blue' | 'dark' | 'red'
}