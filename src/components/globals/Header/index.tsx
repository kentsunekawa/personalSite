"use client"
// import from libraries
import Link from "next/link"

// import from this project
import { APP_INFO } from "@/constants"
import { getPageInfo } from "@/utils"
import { useStyle, usePageState } from "@/hooks"
import { ToggleTheme } from "@/components/parts/ToggleTheme"
import { Nav } from "@/components/globals/Nav"
import { LangChanger } from "@/components/parts/LangChanger"
import { createStyles } from "./styles"

export type Props = {
  showTopLogo?: boolean
  showNav?: boolean
}

export const Header: React.FC<Props> = ({
  showTopLogo = true,
  showNav = true,
}) => {
  const { styles } = useStyle(createStyles)

  const { pageState } = usePageState()

  if (!pageState) return null

  return (
    <header css={styles.container}>
      {showTopLogo && (
        <div>
          <Link href={getPageInfo("home").createPath(pageState.lang)}>
            {APP_INFO.siteName}
          </Link>
        </div>
      )}
      <div>
        {showNav && <Nav />}
        <ToggleTheme />
        <LangChanger langInfo={pageState.translatedLangs} />
      </div>
    </header>
  )
}
