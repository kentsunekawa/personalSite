"use client"
// import from this project
import { PageState } from "@/types"
import { Post } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"

type Props = PageState & {
  post: Post
}

export const Experience: React.FC<Props> = ({ post }) => {
  const { title, content, date } = post

  return (
    <PageBase>
      <div>{title}</div>
      <div>{date}</div>
      <div>
        <MarkdownDisplay>{content}</MarkdownDisplay>
      </div>
    </PageBase>
  )
}