"use client"
// import from libraries
import Link from "next/link"

// import from this project
import { useStyle, usePageState } from "@/hooks"
import { getPageInfo } from "@/utils"
import { createStyles } from "./styles"

export const Nav: React.FC = () => {
  const { styles } = useStyle(createStyles)
  const { pageState } = usePageState()

  if (!pageState) return null

  return (
    <nav css={styles.container}>
      <ul>
        <li>
          <Link href={getPageInfo("profile").createPath(pageState.lang)}>
            Profile
          </Link>
        </li>
        <li>
          <Link href={getPageInfo("projects").createPath(pageState.lang)}>
            Projects
          </Link>
        </li>
        <li>
          <Link href={getPageInfo("experiences").createPath(pageState.lang)}>
            Experiences
          </Link>
        </li>
      </ul>
    </nav>
  )
}
