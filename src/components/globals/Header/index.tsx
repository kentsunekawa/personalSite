"use client"
// import from libraries

// import from this project
import { APP_INFO } from "@/constants"
import { useStyle } from "@/hooks"
import { ToggleTheme } from "@/components/parts/ToggleTheme"
import { createStyles } from "./styles"

export const Header: React.FC = () => {
  const { styles } = useStyle(createStyles)
  return (
    <header css={styles.container}>
      <a href="/">{APP_INFO.siteName}</a>
      <ToggleTheme />
    </header>
  )
}
