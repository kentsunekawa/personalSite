"use client"
// import from libraries

// import from this project
import { PageState } from "@/types"
import { Lang, Profile, Post } from "@/graphql/generated/types"
import { APP_INFO } from "@/constants"
import { PageBase } from "@/components/globals/PageBase"
import { Nav } from "@/components/globals/Nav"
import { Accounts } from "@/components/parts/Accounts"
import { Posts } from "./Posts"

type Props = PageState & {
  profile: Profile
  posts: Post[]
}

export const Home: React.FC<Props> = ({ lang, profile, posts }) => {
  const { name, businessTitle, accounts, email } = profile
  return (
    <PageBase>
      <Nav lang={lang} />
      <div>
        <h1>{APP_INFO.catchCopy}</h1>
        <div>
          <p>{name}</p>
          <p>{businessTitle}</p>
          <p>{email}</p>
          <div>
            <Accounts accounts={accounts} />
          </div>
        </div>
        <div>
          <Posts posts={posts} lang={lang} />
        </div>
      </div>
    </PageBase>
  )
}
