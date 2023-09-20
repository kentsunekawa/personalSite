import { NextPage } from "next"
import Link from "next/link"

import { NotionClient } from "@/libs/notion"
import { PageBase } from "@/components/globals/PageBase"

const notion = new NotionClient()

const Page: NextPage = async () => {
  const posts = await notion.getPosts()
  return (
    <PageBase>
      This is experiences page.
      <div>
        <ul>
          {posts.map(({ id, title, date }) => (
            <li key={id}>
              <Link href={`/experiences/${id}`}>
                <div>
                  <p>{title}</p>
                  <p>{date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageBase>
  )
}

export default Page
