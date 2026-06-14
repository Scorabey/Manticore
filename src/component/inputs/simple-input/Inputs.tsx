import style from './Inputs.module.scss';
import type { Input, State } from '@/lib/types';
import { XCircleIcon, InformationCircleIcon, CheckCircleIcon } from '@heroicons/react/20/solid';

export function SimpleInput({ 
    placeholder, 
    isDisabled = false, 
    state = null, 
    requiredField = false, 
    ...props 
    }: Input) {

    return (
        <div className={style.inputFrame}>
            <div className={style.wrapperForm}>
                <div 
                className={`
                ${style.inputForm} 
                ${state ? style[state] : ''}
                `}>
                    <input 
                    type="text" 
                    className={style.input} 
                    placeholder={isDisabled ? 'Disabled' : placeholder} 
                    disabled={isDisabled}
                    {...props}
                    />
                </div>
            </div>
            {requiredField 
                ? <RequiredFieldForm state={state}/>
                : null}
        </div>
    )
}

export function IconLeftInput({ 
    placeholder, 
    isDisabled = false, 
    state = null, 
    Icon = null, 
    requiredField = false }: Input) {
    
    return (
        <div className={style.inputFrame}>
            <div className={style.wrapperForm}>
                <div 
                className={`
                    ${style.inputForm} 
                    ${style.inputIcon} 
                    ${state ? style[state] : ''}
                    ${style.fixLeftPadding}
                    `}>
                    {Icon && <Icon className={style.inputIcon} width={20} height={20} />}
                    <input 
                    type="text" 
                    className={style.input} 
                    placeholder={isDisabled ? 'Disabled' : placeholder} 
                    disabled={isDisabled}
                    />
                </div>
            </div>
            {requiredField 
                ? <RequiredFieldForm state={state}/>
                : null}
        </div>
    )                                         
}

export function IconRightInput({ 
    placeholder, 
    isDisabled = false, 
    state = null, 
    Icon = null, 
    requiredField = false }: Input) {

    return (
        <div className={style.inputFrame}>
            <div className={style.wrapperForm}>
                <div 
                className={`
                    ${style.inputForm} 
                    ${style.inputIcon} 
                    ${state ? style[state] : ''}
                    `}>
                    <input 
                    type="text" 
                    className={style.input} 
                    placeholder={isDisabled ? 'Disabled' : placeholder} 
                    disabled={isDisabled}
                    />
                    {Icon && <Icon className={style.inputIcon} width={20} height={20} />}
                </div>
            </div>
            {requiredField 
                ? <RequiredFieldForm state={state}/>
                : null}
        </div>
    )
}

export function InputSkeleton() {
    return (
        <div className={style.skeleton}>
            <div className={style.bling}></div>
        </div>
    )
}

function RequiredFieldForm({ state }: { state: State | null }) {
    return (
        <div className={style.fieldFrame}>
            {state === null && <InformationCircleIcon height={20} width={20} className={`
                ${style.requiredIcon}
                ${state ? style[state] : ''}
                `}/>}
            {state === 'success' && <CheckCircleIcon height={20} width={20} className={`
                ${style.requiredIcon}
                ${state ? style[state] : ''}
                `}/>}
            {state === 'error' && <XCircleIcon height={20} width={20} className={`
                ${style.requiredIcon}
                ${state ? style[state] : ''}
                `}/>}
            <label 
            className={`
                ${style.requiredLabel}
                ${state ? style[state] : ''}
                `}>This is required field</label>
        </div>
    )
}