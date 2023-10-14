import { NextPage } from "next"

import { Lang } from "@/graphql/generated/types"
import { getProfile } from "@/functions/getProfile"
import { getPosts } from "@/functions/getPosts"
import { Home } from "@/components/pageContents/Home"

const Page: NextPage = async () => {
  const { data: postsData } = await getPosts(Lang.En)
  const { data: profileData } = await getProfile(Lang.En)

  return (
    <Home
      lang={Lang.En}
      profile={profileData.profile}
      posts={postsData.posts.map((post) => post)}
    />
  )
}

export default Page
