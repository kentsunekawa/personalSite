'use client'
// import from libraries

// import from this project
import { useStyle, useTextStyles } from '@/hooks'
import { Texts } from '@/components/parts/Texts'
import {
  BreadCrumbs,
  Props as BreadCrumbsProps,
} from '@/components/parts/BreadCrumbs'
import { MQ } from '@/components/parts/MQ'
import { FB } from '@/components/parts/FB'
import { createStyles } from './styles'

export type Props = {
  summary?: React.ReactNode
  children?: React.ReactNode
  breadCrumsInfo?: BreadCrumbsProps
}

export const PageContent: React.FC<Props> = ({
  summary,
  children,
  breadCrumsInfo,
}) => {
  const { styles } = useStyle(createStyles)
  const { styles: textStyle } = useTextStyles()

  return (
    <FB gap={[7, 0]} insertStyles={{ container: styles.container }}>
      <MQ mq='tbMin_gt'>
        <MQ print={false}>
          {breadCrumsInfo && (
            <FB justifyContent='center'>
              <div css={styles.inner}>
                <BreadCrumbs {...breadCrumsInfo} />
              </div>
            </FB>
          )}
        </MQ>
      </MQ>
      {summary && (
        <FB justifyContent='center'>
          <div css={[styles.inner, textStyle.text.m]}>
            {typeof summary === 'string' ? (
              <Texts.Text size='s'>{summary}</Texts.Text>
            ) : (
              summary
            )}
          </div>
        </FB>
      )}
      {children && <div css={styles.main}>{children}</div>}
    </FB>
  )
}
