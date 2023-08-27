"use client"
// import from libraries

// import from this project
import { appInfo } from "@/constants"
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export const Header: React.FC = () => {
  const { styles } = useStyle(createStyles)
  return (
    <header css={styles.container}>
      <a href="/">{appInfo.siteName}</a>
    </header>
  )
}
