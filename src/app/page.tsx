import { NextPage } from "next"

import { client } from "@/graphql/client"
import { GetPostsQuery, GetPostsDocument } from "@/graphql/generated/types"

import { Nav } from "@/components/globals/Nav"

const Page: NextPage = async () => {
  const { data } = await client.query<GetPostsQuery>({
    query: GetPostsDocument,
  })

  console.log(data)

  return (
    <main>
      <h2>Improve UX to make everyday better.</h2>
      <section>hogfehoeg</section>

      <Nav />
    </main>
  )
}

export default Page
