"use client"
// import from libraries
import Link from "next/link"

// import from this project
import { getPageInfo } from "@/utils"
import { useStyle, usePageState } from "@/hooks"
import { createStyles } from "./styles"

export const LangChanger: React.FC = () => {
  const { styles } = useStyle(createStyles)

  const { pageState } = usePageState()

  if (!pageState) return null

  return (
    <div css={styles.container}>
      {pageState.lang !== "EN" && (
        <Link href={getPageInfo(pageState.pageName).createPath("EN")}>
          English
        </Link>
      )}
      {pageState.lang !== "JA" && (
        <Link href={getPageInfo(pageState.pageName).createPath("JA")}>
          Japanese
        </Link>
      )}
    </div>
  )
}
