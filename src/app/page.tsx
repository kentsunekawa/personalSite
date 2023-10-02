import { NextPage } from "next"

import { client } from "@/graphql/client"
import {
  GetPostsQuery,
  GetPostsDocument,
  Lang,
} from "@/graphql/generated/types"
import { getProfile } from "@/functions/getProfile"

import { Nav } from "@/components/globals/Nav"

const Page: NextPage = async () => {
  const { data: postsData } = await client.query<GetPostsQuery>({
    query: GetPostsDocument,
  })
  const { data: profileData } = await getProfile(Lang.Ja)

  // console.log(postsData)
  // console.log(profileData)

  return (
    <main>
      <h2>Improve UX to make everyday better.</h2>
      <section>hogfehoeg</section>

      <Nav />
    </main>
  )
}

export default Page
