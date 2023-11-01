"use client"
// import from libraries

// import from this project
import { APP_INFO } from "@/constants"
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export const Footer: React.FC = () => {
  const { styles } = useStyle(createStyles)
  return (
    <footer css={styles.container}>
      <p>&copy; {APP_INFO.copyright}</p>
    </footer>
  )
}
