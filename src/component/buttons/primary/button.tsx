'use client'

import type { ButtonProps } from "@/lib/types";
import style from './button.module.scss';
import { Loader } from 'react-feather';
import { useRouter } from "next/navigation";

export const PrimaryButton = ({ 
    children, 
    themeColor = 'dark',
    className,
    link = null,
    ...rest 
    }: ButtonProps) => {

    const router = useRouter()

    const CheckLink = () => {
        if(link) router.push(link)

        return null
    }

    return (
        <div 
        className={[style.buttonFrame, className].filter(Boolean).join(" ")}
        data-overflow={themeColor}
        >
            <button 
            className={style.button}
            onClick={CheckLink}
            {...rest}
            >
                {children}
            </button>
        </div>
    )
}

export const PrimaryButtonSkeleton = ({
    themeColor = 'dark'
}) => {

    return (
        <div 
        className={`
        ${style.buttonFrame}
        `}
        data-overflow={themeColor}>
            <button 
            className={`
            ${style.button}
            ${style.buttonSkeleton}
            `}>
                <Loader width={20} height={20}/>
            </button>
        </div>
    )
}