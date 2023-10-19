import { NextPage } from "next"
import { redirect } from "next/navigation"

import { getPosts } from "@/functions/getPosts"
import { getPost } from "@/functions/getPost"
import { Experience } from "@/components/pageContents/Experience"

type Props = {
  params: { slug: string }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { data: postData } = await getPost(params.slug)

  if (!postData.post) return redirect("/404")

  return <Experience post={postData.post} />
}

export default Page

export async function generateStaticParams() {
  const { data } = await getPosts()

  return data.posts.map(({ slug }) => ({
    slug,
  }))
}
