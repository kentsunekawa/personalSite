import { NextPage } from "next"

import { NotionClient } from "@/libs/notion"
import { PageBase } from "@/components/globals/PageBase"

const notion = new NotionClient()

type Props = {
  params: {
    id: string
  }
}

const Page: NextPage<Props> = async ({ params: { id } }) => {
  const { title } = await notion.getPost(id)

  return (
    <PageBase>
      <h1>{title}</h1>
    </PageBase>
  )
}

export default Page

export async function generateStaticParams() {
  const posts = await notion.getPosts()

  return posts.map(({ id }) => ({
    id,
  }))
}
