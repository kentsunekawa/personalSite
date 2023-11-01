import { Lang, Profile, Post } from "@/graphql/generated/types"
import { APP_INFO } from "@/constants"
import { PageBase } from "@/components/globals/PageBase"
import { Nav } from "@/components/globals/Nav"
import { Accounts } from "@/components/parts/Accounts"

type Props = {
  lang?: Lang
  profile: Profile
  posts: Post[]
}

export const Home: React.FC<Props> = ({ lang = Lang.Ja, profile }) => {
  const { name, businessTitle, accounts, email } = profile
  return (
    <PageBase>
      <Nav />
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
      </div>
    </PageBase>
  )
}
