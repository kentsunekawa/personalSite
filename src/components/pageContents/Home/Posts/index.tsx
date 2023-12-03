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
      <div css={styles.row}>
        <Texts.Text>Latest posts</Texts.Text>
      </div>
      <div css={styles.row}>
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
                  <Texts.Caption insertCss={styles.date}>
                    {formatDateString(date, lang)}
                  </Texts.Caption>
                  <Texts.Text size="l" insertCss={styles.title}>
                    {title}
                  </Texts.Text>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
