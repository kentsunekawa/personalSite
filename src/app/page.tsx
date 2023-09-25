import { NextPage } from "next"

import { client } from "@/graphql/client"
import {
  GetPostsQuery,
  GetPostsDocument,
  GetProfileQuery,
  GetProfileDocument,
} from "@/graphql/generated/types"

import { Nav } from "@/components/globals/Nav"

const Page: NextPage = async () => {
  // const { data: postsData } = await client.query<GetPostsQuery>({
  //   query: GetPostsDocument,
  // })
  const { data: profileData } = await client.query<GetProfileQuery>({
    query: GetProfileDocument,
  })

  // console.log(postsData)
  console.log(profileData)

  return (
    <main>
      <h2>Improve UX to make everyday better.</h2>
      <section>hogfehoeg</section>

      <Nav />
    </main>
  )
}

export default Page
