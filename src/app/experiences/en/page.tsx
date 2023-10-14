import { NextPage } from "next"

import { Lang } from "@/graphql/generated/types"
import { getPosts } from "@/functions/getPosts"
import { Experiences } from "@/components/pageContents/Experiences"

const Page: NextPage = async () => {
  const { data: postsData } = await getPosts(Lang.En)

  return (
    <Experiences posts={postsData.posts.map((post) => post)} lang={Lang.En} />
  )
}

export default Page
