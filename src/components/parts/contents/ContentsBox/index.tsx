"use client"
// import from libraries

// import from this project
import { Lang } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { formatDateString } from "@/utils"
import { HeadingSize } from "@/styles/commonStyles/textStyles"
import {
  DefinitionTable,
  Props as DefinitionTableProps,
} from "@/components/parts/DefinitionTable"
import { Texts } from "@/components/parts/Texts"
import { createStyles } from "./styles"

export type Props = {
  lang: Lang
  contents: {
    title: {
      tag: HeadingSize
      node: React.ReactNode
    }
    subTitle?: string
    period?: {
      start: string
      end?: string | null
    }
    metaInfo?: DefinitionTableProps["data"]
    main?: React.ReactNode
  }
}

export const ContentsBox: React.FC<Props> = ({ lang, contents }) => {
  const { styles } = useStyle(createStyles)

  const { title, subTitle, period, metaInfo, main } = contents

  return (
    <article css={styles.container}>
      <div css={styles.header}>
        {period && (
          <div css={styles.titleArea.container}>
            <Texts.Caption>{`${formatDateString(period.start, lang)}${
              period.end ? ` - ${formatDateString(period.end, lang)}` : ""
            }`}</Texts.Caption>
          </div>
        )}
        <div css={styles.titleArea.container}>
          <Texts.Heading tag={title.tag}>{title.node}</Texts.Heading>
        </div>
        {subTitle && (
          <div css={styles.subTitleArea.container}>
            <Texts.Text>{subTitle}</Texts.Text>
          </div>
        )}
      </div>
      {metaInfo && (
        <div>
          <DefinitionTable data={metaInfo} />
        </div>
      )}
      {main && <div css={styles.main}>{main}</div>}
    </article>
  )
}
