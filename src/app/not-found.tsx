import Image from "next/image"
import Link from "next/link"
import { PrimaryButton } from "@/component/buttons/primary/button"

export default function NotFound() {
    return (
        <div className="notFound">
        <Link href="/">
            <Image
            src="/MANTICORE.svg"
            alt="Logo"
            width={292}
            height={33}
            className="logo"/>
        </Link>
        <article className="notFound__article">
            <h2>
                Ouch! This page not found!
            </h2>
            <PrimaryButton 
            themeColor="blue"
            className="article__button"
            link={'/'}>
                Back to home page!
            </PrimaryButton>
        </article>
        </div>
    )
}