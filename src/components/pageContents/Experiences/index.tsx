"use client"
// import from libraries

// import from this project
import { PageState } from "@/types"
import { getPageInfo } from "@/utils"
import { useStyle } from "@/hooks"
import { Lang, Post } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"
import { PageContent } from "@/components/parts/PageContent"
import { LinkBox } from "@/components/parts/LinkBox"
import { createStyles } from "./styles"

type Props = PageState & {
  posts: Post[]
}

const contents = {
  [Lang.Ja]: {
    summary: "ここに説明がきます。",
  },
  [Lang.En]: {
    summary: "Here is a description.",
  },
} as const

export const Experiences: React.FC<Props> = ({ lang, posts }) => {
  const { styles } = useStyle(createStyles)
  return (
    <PageBase>
      <PageContent
        breadCrumsInfo={{
          lang,
          clumbs: [
            {
              pageName: "home",
            },
            {
              isCurrent: true,
              pageName: "experiences",
            },
          ],
        }}
        title="Experiences"
        summary={contents[lang].summary}
      >
        <ul css={styles.list}>
          {posts.map(({ id, slug, title, date }) => (
            <li key={id} css={styles.item}>
              <LinkBox
                key={id}
                href={getPageInfo("experience").createPath(lang, { slug })}
                title={title}
                subTitle={date}
              />
            </li>
          ))}
        </ul>
      </PageContent>
    </PageBase>
  )
}
