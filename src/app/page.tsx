import { NextPage } from "next"

import { getProfile } from "@/functions/getProfile"
import { getPosts } from "@/functions/getPosts"

import { Home } from "@/components/pageContents/Home"

const Page: NextPage = async () => {
  const { data: postsData } = await getPosts()
  const { data: profileData } = await getProfile()

  return (
    <Home
      profile={profileData.profile}
      posts={postsData.posts.map((post) => post)}
    />
  )
}

export default Page
