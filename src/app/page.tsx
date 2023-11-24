// import from libraries
import { NextPage } from "next"

// import from this project
import { PageState } from "@/types"
import { Lang, PostLabel } from "@/graphql/generated/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { getCommonData } from "@/functions/getCommonData"
import { getPosts } from "@/functions/getPosts"

import { Home } from "@/components/pageContents/Home"

const pageState: PageState = {
  lang: Lang.Ja,
  pageName: "home",
  translatedLangs: {
    [Lang.Ja]: true,
    [Lang.En]: true,
  },
}

const Page: NextPage = async () => {
  const { data: postsData } = await getPosts([PostLabel.HighPriority])
  const commonData = await getCommonData(Lang.Ja)

  return (
    <PageContainer {...pageState} commonData={commonData}>
      <Home
        {...pageState}
        profile={commonData.profile}
        posts={postsData.posts.map((post) => post)}
      />
    </PageContainer>
  )
}

export default Page
