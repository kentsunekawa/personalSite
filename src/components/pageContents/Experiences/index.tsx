"use client"
// import from libraries
import Link from "next/link"

// import from this project
import { getPageInfo } from "@/utils"
import { Lang, Post } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"
import { LinkBox } from "@/components/parts/LinkBox"

type Props = {
  lang: Lang
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
