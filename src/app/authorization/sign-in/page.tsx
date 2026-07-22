import style from './style.module.scss'
import { AuthWidget } from '@/widgets/auth/auth'
import Image from 'next/image'
import { SignIn } from '@/features/sign-in/signin'

export default function SignInPage() {

    return (
        <div className={style.page}>
            <main className={style.mainFrame}>
                <Image 
                className={style.mainArt}
                src={'/authorization-art.jpg'}
                alt='Auth-Art'
                width={720}
                height={486}/>
                <AuthWidget>
                    <SignIn />
                </AuthWidget>
            </main>
        </div>
    )
}