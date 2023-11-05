// import from libraries
import { NextPage } from "next"

// import from this project
import { PageState } from "@/types"
import { Lang, PostLabel } from "@/graphql/generated/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { getProfile } from "@/functions/getProfile"
import { getPosts } from "@/functions/getPosts"
import { Home } from "@/components/pageContents/Home"

const pageState: PageState = {
  lang: Lang.En,
  pageName: "home",
  translatedLangs: {
    [Lang.Ja]: true,
    [Lang.En]: true,
  },
}

const Page: NextPage = async () => {
  const { data: postsData } = await getPosts([PostLabel.HighPriority], Lang.En)
  const { data: profileData } = await getProfile(Lang.En)

  return (
    <PageContainer {...pageState}>
      <Home
        {...pageState}
        profile={profileData.profile}
        posts={postsData.posts.map((post) => post)}
      />
    </PageContainer>
  )
}

export default Page
