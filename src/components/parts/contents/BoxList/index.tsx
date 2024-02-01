'use client'
// import from libraries
import React from 'react'

// import from this project
import { useStyle } from '@/hooks'
import { FB } from '@/components/parts/FB'
import { createStyles } from './styles'

export type Props = {
  withSeparator?: boolean
  contents: {
    key: string
    node: React.ReactNode
  }[]
  gap?: number[]
}

export const BoxList: React.FC<Props> = ({
  withSeparator = true,
  contents,
  gap,
}) => {
  const { styles } = useStyle(createStyles)
  return (
    <div>
      <FB gap={gap ?? [5, 0]}>
        {contents.map(({ key, node }, i) => (
          <React.Fragment key={key}>
            <div>{node}</div>
            {withSeparator && i !== contents.length - 1 && (
              <div css={styles.divider} />
            )}
          </React.Fragment>
        ))}
      </FB>
    </div>
  )
}
