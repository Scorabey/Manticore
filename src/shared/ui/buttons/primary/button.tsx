'use client'

import type { ButtonProps } from "@/shared/lib/types/types";
import style from './button.module.scss';
import { Loader } from 'react-feather';
import { useRouter } from "next/navigation";

export const PrimaryButton = ({ 
    children, 
    themeColor = 'dark',
    className,
    link = null,
    isLoading,
    ...rest 
    }: ButtonProps) => {

    const router = useRouter()

    const CheckLink = () => {
        if(link) router.push(link)

        return null
    }

    if (isLoading) {
        return <PrimaryButtonSkeleton themeColor={themeColor}/>
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