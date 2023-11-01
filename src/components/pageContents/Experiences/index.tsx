"use client"
// import from libraries

// import from this project
import { PageState } from "@/types"
import { getPageInfo } from "@/utils"
import { Post } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"
import { LinkBox } from "@/components/parts/LinkBox"

type Props = PageState & {
  posts: Post[]
}

export const Experiences: React.FC<Props> = ({ lang, posts }) => {
  return (
    <PageBase>
      {posts.map(({ id, slug, title, date }) => (
        <LinkBox
          key={id}
          href={getPageInfo("experience").createPath(lang, { slug })}
          title={title}
          subTitle={date}
        />
      ))}
    </PageBase>
  )
}
