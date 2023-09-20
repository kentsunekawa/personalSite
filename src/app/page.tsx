import { NextPage } from "next"
import Link from "next/link"

import { NotionClient } from "@/libs/notion"
import { Nav } from "@/components/globals/Nav"

const notion = new NotionClient()

const Page: NextPage = async () => {
  const profile = await notion.getProfile()

  const allAccounts = await notion.getAccounts()
  const accounts = allAccounts.filter(({ id }) =>
    profile.accounts.map((account) => account.id).includes(id)
  )

  const posts = await notion.getPosts()
  const filteredPosts = posts.filter(({ labels }) =>
    labels.includes("highPriority")
  )

  return (
    <main>
      <h2>Improve UX to make everyday better.</h2>
      <section>
        <p>{profile.name}</p>
        <p>{profile.businessTitle}</p>
        <ul>
          {accounts.map(({ id, name, url }) => (
            <li key={id}>
              <a href={url} target="_blank">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <div>
        <ul>
          {filteredPosts.map(({ id, title, date }) => (
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
      <Nav />
    </main>
  )
}

export default Page
