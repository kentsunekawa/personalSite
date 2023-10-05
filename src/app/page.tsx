import { NextPage } from "next"

import { getProfile } from "@/functions/getProfile"
import { getPosts } from "@/functions/getPosts"

import { PageContent } from "@/components/pages/index/PageContent"

const Page: NextPage = async () => {
  const { data: postsData } = await getPosts()
  const { data: profileData } = await getProfile()

  return (
    <PageContent
      profile={profileData.profile}
      posts={postsData.posts.map((post) => post)}
    />
  )
}

export default Page
