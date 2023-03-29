import { CSSProperties, FC } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props{
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({text, href}) => {
  const {asPath} = useRouter()

    return (
    // legacyBehavior: a partir de next 13 Link puede renderizar como a, por lo que intentar usar a como hijo es invalido
    <Link legacyBehavior href={href}>
        <a style={ asPath=== href ? style : undefined } >{text}</a>
    </Link>
  )
}

