"use client"
// import from libraries
import Link from "next/link"

// import from this project
import { useStyle, usePageState } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { Button } from "@/components/parts/Button"
import { getPageInfo } from "@/utils"
import { createStyles } from "./styles"

export type Props = {
  isOpen: boolean
  close: () => void
}

export const Menu: React.FC<Props> = ({ isOpen, close }) => {
  const { styles } = useStyle(createStyles)
  const { pageState } = usePageState()

  if (!pageState) return null

  if (!isOpen) return null

  return (
    <div css={styles.container}>
      <Button
        onClick={close}
        insertStyles={{ container: styles.closeButton }}
        type="block"
      >
        ×
      </Button>
      <div css={styles.inner}>
        <nav>
          <ul css={styles.nav.list}>
            <li css={styles.nav.item}>
              <Link href={getPageInfo("profile").createPath(pageState.lang)}>
                <Texts.Text align="center">Profile</Texts.Text>
              </Link>
            </li>
            <li css={styles.nav.item}>
              <Link href={getPageInfo("projects").createPath(pageState.lang)}>
                <Texts.Text align="center">Projects</Texts.Text>
              </Link>
            </li>
            <li css={styles.nav.item}>
              <Link
                href={getPageInfo("experiences").createPath(pageState.lang)}
              >
                <Texts.Text align="center">Experiences</Texts.Text>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
