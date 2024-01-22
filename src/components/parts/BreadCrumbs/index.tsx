'use client'
// import from libraries
import React from 'react'

// import from this project
import { useStyle } from '@/hooks'
import { getPageInfo } from '@/utils'
import { Lang } from '@/graphql/generated/types'
import { PageName } from '@/constants'
import { Button } from '@/components/parts/Button'
import { Texts } from '@/components/parts/Texts'
import { createStyles } from './styles'

type Clum = {
  pageName: PageName
  isCurrent?: boolean
  params?: { [k: string]: string }
  label?: string
}

export type Props = {
  lang: Lang
  clumbs: Clum[]
}

type ClumProps = {
  lang: Lang
  clum: Clum
}

const Clum: React.FC<ClumProps> = ({ lang, clum }) => {
  const { isCurrent, pageName, params, label } = clum
  const { styles } = useStyle(createStyles)

  const { displayName, createPath } = getPageInfo(pageName)
  const href = createPath(lang, params)

  return !isCurrent ? (
    <Button
      href={href}
      size='l'
      weight='b'
      insertCss={{ container: styles.notCurrent }}
    >
      {label ?? displayName}
    </Button>
  ) : (
    <Texts.Text size='l' weight='b'>
      {label ?? displayName}
    </Texts.Text>
  )
}

export const BreadCrumbs: React.FC<Props> = ({ lang, clumbs }) => {
  const { styles } = useStyle(createStyles)
  return clumbs.length > 0 ? (
    <div css={styles.container}>
      {
        <ul css={styles.list}>
          {clumbs.map((clum, i) => (
            <React.Fragment key={clum.pageName}>
              <li>
                <Clum lang={lang} clum={clum} />
              </li>
              {i < clumbs.length - 1 && (
                <li>
                  <span css={styles.separator} />
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      }
    </div>
  ) : null
}
