import style from './style.module.scss'
import { AuthWidget } from '@/widgets/auth/auth'

export default function AuthPage() {

    return (
        <div className={style.page}>
            <AuthWidget />
        </div>
    )
}