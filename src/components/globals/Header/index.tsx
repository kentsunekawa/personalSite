"use client"
// import from libraries
import { useState } from "react"
import Link from "next/link"

// import from this project
import { APP_INFO } from "@/constants"
import { getPageInfo } from "@/utils"
import { useStyle, usePageState } from "@/hooks"
import { ToggleTheme } from "@/components/parts/ToggleTheme"
import { Nav } from "@/components/globals/Nav"
import { Texts } from "@/components/parts/Texts"
import { Button } from "@/components/parts/Button"
import { Menu } from "@/components/globals/Menu"
import { MQ } from "@/components/parts/MQ"
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

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  if (!pageState) return null

  return (
    <>
      <div css={styles.space} />
      <header css={styles.container}>
        <div>
          {showTopLogo && (
            <Link
              href={getPageInfo("home").createPath(pageState.lang)}
              css={styles.name}
            >
              <Texts.Text weight="xb" size="l">
                {APP_INFO.siteName}
              </Texts.Text>
            </Link>
          )}
        </div>
        <div css={styles.menuArea}>
          <LangChanger langInfo={pageState.translatedLangs} />
          <ToggleTheme />
          <MQ mq="tbMax_lt">
            <Button onClick={() => setIsOpenMenu(true)}>Menu</Button>
            {isOpenMenu && (
              <Menu isOpen={isOpenMenu} close={() => setIsOpenMenu(false)} />
            )}
          </MQ>
          <MQ mq="tbMin_gt">{showNav && <Nav />}</MQ>
        </div>
      </header>
    </>
  )
}
