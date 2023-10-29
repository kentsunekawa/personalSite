"use client"
import { Lang, Post } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"

type Props = {
  lang?: Lang
  post: Post
}

export const Experience: React.FC<Props> = ({ lang = Lang.Ja, post }) => {
  const { title, content } = post
  return (
    <PageBase>
      <div>{title}</div>
      <div>
        <MarkdownDisplay>{content}</MarkdownDisplay>
      </div>
    </PageBase>
  )
}
