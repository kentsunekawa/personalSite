"use client"
// import from libraries

// import from this project
import { APP_INFO } from "@/constants"
import { useStyle } from "@/hooks"
import { ToggleTheme } from "@/components/parts/ToggleTheme"
import { LangChanger, LangInfo } from "@/components/parts/LangChanger"
import { createStyles } from "./styles"

export type Props = {
  langInfo?: LangInfo
}

export const Header: React.FC<Props> = ({ langInfo }) => {
  const { styles } = useStyle(createStyles)
  return (
    <header css={styles.container}>
      <a href="/">{APP_INFO.siteName}</a>
      <ToggleTheme />
      <LangChanger langInfo={langInfo} />
    </header>
  )
}
