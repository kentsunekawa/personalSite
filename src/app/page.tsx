import { NextPage } from "next"

import { NotionClient } from "@/libs/notion"
import { Client } from "@notionhq/client"
import type {
  GetPageResponse,
  PartialPageObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.d"

// export type PageObject = MatchType<
//   Awaited<ReturnType<Client["pages"]["retrieve"]>>,
//   {
//     properties: unknown
//   }
// >

// const notion = new Client({
//   auth: process.env.NEXT_PUBLIC_NOTION_KEY,
// })

// const profilePageId = "ece58dec-1546-4b3d-b2d6-34b7c69f0a93"

// const getPage = async (page_id: string) => {
//   try {
//     const result = await notion.pages.retrieve({
//       page_id,
//     })

//     return "properties" in result ? result : null
//   } catch (e) {
//     console.log(e)
//     return null
//   }
// }

// const getData = async (database_id: string) => {
//   try {
//     const result = await notion.databases.query({
//       database_id,
//     })

//     return result
//   } catch (e) {
//     console.log(e)
//   }
// }

// const getProfileData = async () => {
//   try {
//     const profilePageData = await getPage(profilePageId)
//     return profilePageData
//   } catch (e) {
//     console.log(e)
//   }
// }

// const getChildren = async () => {
//   try {
//     const result = await notion.blocks.children.list({
//       block_id: "ece58dec-1546-4b3d-b2d6-34b7c69f0a93",
//     })

//     return result
//   } catch (e) {
//     console.log(e)
//   }
// }

const notion = new NotionClient()

const Page: NextPage = async () => {
  const profile = await notion.getProfile()
  const accounts = await (
    await notion.getAccounts()
  ).filter((account) => !!account)

  return (
    <main>
      <h1>Beyond Screens Development</h1>
      <h2>Improve UX to make everyday better.</h2>
      <section>
        <p>{profile.name}</p>
        <p>{profile.businessTitle}</p>
        <ul>
          <li>
            <a href="" target="_blank">
              Linkedin
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              Wantedly
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Page
