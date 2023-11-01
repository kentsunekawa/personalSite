"use client"
// import from libraries
import Link from "next/link"

// import from this project
import { Lang } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { getPageInfo } from "@/utils"
import { createStyles } from "./styles"

type Props = {
  lang: Lang | undefined
}

export const Nav: React.FC<Props> = ({ lang }) => {
  const { styles } = useStyle(createStyles)
  return (
    <nav css={styles.container}>
      <ul>
        <li>
          <Link href={getPageInfo("profile").createPath(lang)}>Profile</Link>
        </li>
        <li>
          <Link href={getPageInfo("projects").createPath(lang)}>Projects</Link>
        </li>
        <li>
          <Link href={getPageInfo("experiences").createPath(lang)}>
            Experiences
          </Link>
        </li>
      </ul>
    </nav>
  )
}
