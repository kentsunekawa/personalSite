import { NextPage } from "next"

import { Lang } from "@/graphql/generated/types"
import { getProfile } from "@/functions/getProfile"
import { getPosts } from "@/functions/getPosts"

import { PageContent } from "@/components/pages/index/PageContent"

const Page: NextPage = async () => {
  const { data: postsData } = await getPosts(Lang.En)
  const { data: profileData } = await getProfile(Lang.En)

  return (
    <PageContent
      lang={Lang.En}
      profile={profileData.profile}
      posts={postsData.posts.map((post) => post)}
    />
  )
}

export default Page
