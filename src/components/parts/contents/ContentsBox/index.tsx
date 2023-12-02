"use client"
// import from libraries
import { useState } from "react"

// import from this project
import { InsertStyles } from "@/types"
import { useStyle, useTextStyles } from "@/hooks"
import { formatDateString, createPeriodText } from "@/utils"
import { Lang } from "@/graphql/generated/types"
import { HeadingSize } from "@/styles/commonStyles/textStyles"
import {
  DefinitionTable,
  Props as DefinitionTableProps,
} from "@/components/parts/DefinitionTable"
import { Texts } from "@/components/parts/Texts"
import { Button } from "@/components/parts/Button"
import { createStyles } from "./styles"

export type Props = {
  lang: Lang
  contents: {
    title: {
      tag: HeadingSize
      node: React.ReactNode
    }
    subTitle?: string
    summary?: React.ReactNode
    period?: {
      start: string
      end?: string | null
    }
    metaInfo?: DefinitionTableProps["data"]
    main?: React.ReactNode
    moreArea?: React.ReactNode
  }
  insertStyles?: InsertStyles<"container">
}

const textContents = {
  [Lang.Ja]: {
    texts: {
      now: "現在",
    },
  },
  [Lang.En]: {
    texts: {
      now: "Now",
    },
  },
}

export const ContentsBox: React.FC<Props> = ({
  lang,
  contents,
  insertStyles,
}) => {
  const { styles } = useStyle(createStyles)
  const { styles: textStyle } = useTextStyles()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { title, subTitle, summary, period, metaInfo, main, moreArea } =
    contents

  return (
    <article css={[styles.container, insertStyles?.container]}>
      <div css={styles.header}>
        {period && (
          <div css={styles.titleArea.container}>
            <Texts.Caption>{createPeriodText(period, lang)}</Texts.Caption>
          </div>
        )}
        <div css={styles.titleArea.container}>
          <Texts.Heading tag={title.tag}>{title.node}</Texts.Heading>
        </div>
        {subTitle && (
          <div css={styles.subTitleArea.container}>
            <Texts.Text size="s">{subTitle}</Texts.Text>
          </div>
        )}
      </div>
      {summary && (
        <div css={[styles.summaryArea, textStyle.text.m]}>{summary}</div>
      )}
      {metaInfo && (
        <div>
          <DefinitionTable data={metaInfo} />
        </div>
      )}
      {main && <div css={styles.main}>{main}</div>}
      {moreArea && (
        <div css={styles.moreArea.container}>
          {isOpen && <div css={styles.moreArea.main}>{moreArea}</div>}
          <div css={styles.moreArea.buttonArea}>
            <Button type="block" onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen ? "Hide" : "More"}
            </Button>
          </div>
        </div>
      )}
    </article>
  )
}
