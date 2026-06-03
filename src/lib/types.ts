export enum State {
    success = 'success',
    error = 'error'
}

export interface Input {
    placeholder: string
    isDisabled: boolean
    state: State | null
}