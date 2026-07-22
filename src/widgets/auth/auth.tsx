import style from './auth.module.scss'
import React from 'react'

export const AuthWidget = ({ 
    children,
 }: Readonly<{
    children: React.ReactNode
 }>) => {
    return (
        <article
        className={style.article}>
            {children}
        </article>
    )
}