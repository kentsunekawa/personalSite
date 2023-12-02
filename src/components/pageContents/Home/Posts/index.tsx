"use client"
// import from libraries
import Link from "next/link"

// import from this project
import { Lang, Post as PostType } from "@/graphql/generated/types"
import { getPageInfo, formatDateString } from "@/utils"
import { useStyle } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { createStyles } from "./styles"

export type Post = Pick<PostType, "id" | "date" | "slug" | "title">

export type Props = {
  posts: Post[]
  lang: Lang
}

export const Posts: React.FC<Props> = ({ posts, lang }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      {posts.length > 0 && (
        <ul css={styles.list}>
          {posts.map(({ id, slug, title, date }) => (
            <li key={id} css={styles.item}>
              <Link
                href={getPageInfo("experience").createPath(lang, {
                  slug,
                })}
                css={styles.box}
              >
                <Texts.Heading size="h6" insertCss={styles.title}>
                  {title}
                </Texts.Heading>
                <Texts.Caption insertCss={styles.date}>
                  {formatDateString(date, lang)}
                </Texts.Caption>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
