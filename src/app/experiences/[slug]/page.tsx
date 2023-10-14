import { NextPage } from "next"

import { Lang } from "@/graphql/generated/types"
import { getPosts } from "@/functions/getPosts"
import { getPost } from "@/functions/getPost"
import { Experience } from "@/components/pageContents/Experience"

type Props = {
  params: { slug: string }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { data: postData } = await getPost(params.slug)

  if (!postData.post) return null

  return <Experience post={postData.post} />
}

export default Page

export async function generateStaticParams() {
  const { data } = await getPosts()

  return data.posts.map(({ slug }) => ({
    slug,
  }))
}
