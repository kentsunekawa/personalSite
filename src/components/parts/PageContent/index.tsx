"use client"
// import from libraries

// import from this project
import { useStyle, useTextStyles } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import {
  BreadCrumbs,
  Props as BreadCrumbsProps,
} from "@/components/parts/BreadCrumbs"
import { MQ } from "@/components/parts/MQ"
import { createStyles } from "./styles"

export type Props = {
  title?: React.ReactNode
  summary?: React.ReactNode
  children?: React.ReactNode
  breadCrumsInfo?: BreadCrumbsProps
}

export const PageContent: React.FC<Props> = ({
  title,
  summary,
  children,
  breadCrumsInfo,
}) => {
  const { styles } = useStyle(createStyles)
  const { styles: textStyle } = useTextStyles()

  return (
    <div css={styles.container}>
      <MQ mq="tbMin_gt">
        <MQ print={false}>
          {breadCrumsInfo && (
            <div css={styles.breadCrumArea}>
              <BreadCrumbs {...breadCrumsInfo} />
            </div>
          )}
        </MQ>
      </MQ>
      {(title || summary) && (
        <div css={styles.headerArea.container}>
          {title && (
            <div css={styles.headerArea.row}>
              <Texts.Heading tag="h1">{title}</Texts.Heading>
            </div>
          )}
          {summary && (
            <div css={[styles.headerArea.row, textStyle.text.m]}>{summary}</div>
          )}
        </div>
      )}
      {children && <div css={styles.main}>{children}</div>}
    </div>
  )
}
