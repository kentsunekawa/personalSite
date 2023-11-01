"use client"
// import from libraries
import Link from "next/link"

// import from this project
import { Lang, Post as PostType } from "@/graphql/generated/types"
import { getPageInfo } from "@/utils"
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export type Post = Pick<PostType, "id" | "date" | "slug" | "title">

export type Props = {
  posts: Post[]
  lang?: Lang
}

export const Posts: React.FC<Props> = ({ posts, lang = Lang.Ja }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      {posts.length > 0 && (
        <ul>
          {posts.map(({ id, slug, title, date }) => (
            <li key={id}>
              <Link
                href={getPageInfo("experience").createPath(lang, {
                  slug,
                })}
              >
                {title}
                {date}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
