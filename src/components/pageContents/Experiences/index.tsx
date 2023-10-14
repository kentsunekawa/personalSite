import Link from "next/link"

import { Lang, Post } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"

type Props = {
  lang?: Lang
  posts: Post[]
}

export const Experiences: React.FC<Props> = ({ lang = Lang.Ja, posts }) => {
  return (
    <PageBase>
      {posts.map(({ id, slug, title }) => (
        <Link
          href={`/experiences/${slug}${lang === Lang.En ? "/en" : ""}`}
          key={id}
        >
          <div>{title}</div>
        </Link>
      ))}
    </PageBase>
  )
}
