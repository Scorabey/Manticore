import { SignUp } from '@/features/sign-up/signup'
import style from './style.module.scss'
import { AuthWidget } from '@/widgets/auth/auth'
import Image from 'next/image'

export default function SignUpPage() {

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
                    <SignUp />
                </AuthWidget>
            </main>
        </div>
    )
}