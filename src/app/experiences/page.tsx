import { NextPage } from "next"

import { getPosts } from "@/functions/getPosts"
import { Experiences } from "@/components/pageContents/Experiences"

const Page: NextPage = async () => {
  const { data: postsData } = await getPosts()

  return <Experiences posts={postsData.posts.map((post) => post)} />
}

export default Page
