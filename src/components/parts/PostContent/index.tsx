"use client"
// import from libraries

// import from this project
import { useStyle } from "@/hooks"
import { formatDateString } from "@/utils"
import { Lang, Post } from "@/graphql/generated/types"
import { Texts } from "@/components/parts/Texts"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"
import { createStyles } from "./styles"

export type Props = {
  lang: Lang
  post: Post
}

export const PostContent: React.FC<Props> = ({ lang, post }) => {
  const { title, date, content } = post
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      <div css={styles.headerArea.container}>
        <Texts.Heading tag="h1">{title}</Texts.Heading>
        <Texts.Caption>{formatDateString(date, lang)}</Texts.Caption>
      </div>
      <div css={styles.main}>
        <MarkdownDisplay>{content}</MarkdownDisplay>
      </div>
    </div>
  )
}
