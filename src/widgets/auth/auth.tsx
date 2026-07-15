import { SignUp } from '@/features/sign-up/signup'
import style from './auth.module.scss'
import { PrimaryButton } from '@/shared/ui/buttons/primary/button'

export const AuthWidget = () => {
    return (
        <article
        className={style.article}>
            <h2
            className={style.title}>
                Create An Account
            </h2>
            <SignUp />
        </article>
    )
}