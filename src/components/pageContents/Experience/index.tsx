"use client"
// import from this project
import { PageState } from "@/types"
import { Post } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"
import { PageContent } from "@/components/parts/PageContent"
import { PostContent } from "@/components/parts/PostContent"

type Props = PageState & {
  post: Post
}

export const Experience: React.FC<Props> = ({ lang, post }) => {
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
              pageName: "experiences",
            },
            {
              isCurrent: true,
              pageName: "experience",
              label: post.title,
            },
          ],
        }}
      >
        <PostContent lang={lang} post={post}></PostContent>
      </PageContent>
    </PageBase>
  )
}
