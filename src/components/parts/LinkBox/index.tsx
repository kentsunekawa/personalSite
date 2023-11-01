"use client"
// import from libraries
import Link from "next/link"

// import from this project
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export type Props = {
  href: string
  title: string
  subTitle: string
}

export const LinkBox: React.FC<Props> = ({ href, title, subTitle }) => {
  const { styles } = useStyle(createStyles)
  return (
    <Link href={href}>
      <div css={styles.container}>
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
    </Link>
  )
}
