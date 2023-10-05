import { Lang, Profile, Post } from "@/graphql/generated/types"

import { PageBase } from "@/components/globals/PageBase"
import { Nav } from "@/components/globals/Nav"

type Props = {
  lang?: Lang
  profile: Profile
  posts: Post[]
}

export const PageContent: React.FC<Props> = ({ lang = Lang.Ja, profile }) => {
  return (
    <PageBase>
      <Nav />
      {profile.name}
    </PageBase>
  )
}
