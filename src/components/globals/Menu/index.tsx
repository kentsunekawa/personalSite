"use client"
// import from libraries

// import from this project

import { useStyle, useNavButton } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { Button } from "@/components/parts/Button"

import { createStyles } from "./styles"

export type Props = {
  isOpen: boolean
  close: () => void
}

export const Menu: React.FC<Props> = ({ isOpen, close }) => {
  const { styles } = useStyle(createStyles)

  const { linksInfo } = useNavButton(close)

  if (!isOpen) return null

  return (
    <div css={styles.container}>
      <Button
        onClick={close}
        insertCss={{ container: styles.closeButton }}
        type="block"
      >
        ×
      </Button>
      <div css={styles.main}>
        <nav css={styles.nav.container}>
          <ul css={styles.nav.list}>
            {linksInfo.map(({ pageName, props, label }) => (
              <li css={styles.nav.item} key={pageName}>
                <Button
                  {...props}
                  type="block"
                  insertCss={{
                    container: styles.nav.button,
                  }}
                >
                  <Texts.Text insertCss={styles.nav.text}>{label}</Texts.Text>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
