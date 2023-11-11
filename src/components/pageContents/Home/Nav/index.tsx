"use client"
// import from libraries
import Link from "next/link"

// import from this project
import { useStyle, usePageState } from "@/hooks"
import { getPageInfo } from "@/utils"
import { Button } from "@/components/parts/Button"
import { createStyles } from "./styles"

export const Nav: React.FC = () => {
  const { styles } = useStyle(createStyles)
  const { pageState } = usePageState()

  if (!pageState) return null

  return (
    <nav css={styles.container}>
      <ul css={styles.list}>
        <li>
          <Button
            href={getPageInfo("profile").createPath(pageState.lang)}
            size="l"
            type="block"
          >
            Profile
          </Button>
        </li>
        <li>
          <Button
            href={getPageInfo("projects").createPath(pageState.lang)}
            size="l"
            type="block"
          >
            Projects
          </Button>
        </li>
        <li>
          <Button
            href={getPageInfo("experiences").createPath(pageState.lang)}
            size="l"
            type="block"
          >
            Experiences
          </Button>
        </li>
      </ul>
    </nav>
  )
}
