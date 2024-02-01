'use client'
// import from libraries
import React, { useState, forwardRef } from 'react'
import Link from 'next/link'

// import from this project
import { APP_INFO } from '@/constants'
import { getPageInfo } from '@/utils'
import { useStyle, usePageState } from '@/hooks'
import { ToggleTheme } from '@/components/parts/ToggleTheme'
import { Nav } from '@/components/globals/Nav'
import { Texts } from '@/components/parts/Texts'
import { IconButton } from '@/components/parts/IconButton'
import { Menu } from '@/components/globals/Menu'
import { Icons } from '@/components/parts/Icons'
import { MQ } from '@/components/parts/MQ'
import { LangChanger } from '@/components/parts/LangChanger'
import { createStyles } from './styles'

export type Props = {
  showTopLogo?: boolean
  showNav?: boolean
}

type Ref = HTMLElement

export const Header = React.forwardRef<Ref, Props>(function Component(
  { showTopLogo = true, showNav = true },
  ref,
) {
  const { styles } = useStyle(createStyles)

  const { pageState } = usePageState()

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  if (!pageState) return null

  return (
    <>
      <div css={styles.space} />
      <header css={styles.container} ref={ref}>
        <div css={styles.bg} />
        <div>
          {showTopLogo && (
            <Link href={getPageInfo('home').createPath(pageState.lang)}>
              <Texts.Text insertCss={styles.siteNameText}>
                {APP_INFO.siteName}
              </Texts.Text>
            </Link>
          )}
        </div>
        <div css={styles.menuArea}>
          <MQ mq='pcMin_gt'>
            {showNav && (
              <>
                <Nav />
                <span css={styles.spacer} />
              </>
            )}
          </MQ>
          <div css={styles.subMenu}>
            <LangChanger langInfo={pageState.translatedLangs} />
            <ToggleTheme />
          </div>
          <MQ mq='tbMax_lt'>
            {showNav && (
              <>
                <IconButton onClick={() => setIsOpenMenu(true)}>
                  <Icons.Menu />
                </IconButton>
                {isOpenMenu && (
                  <Menu
                    isOpen={isOpenMenu}
                    close={() => setIsOpenMenu(false)}
                  />
                )}
              </>
            )}
          </MQ>
        </div>
      </header>
    </>
  )
})
