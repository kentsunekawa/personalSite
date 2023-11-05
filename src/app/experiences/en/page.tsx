// import from libraries
import { NextPage } from "next"

// import from this project
import { PageState } from "@/types"
import { Lang } from "@/graphql/generated/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { getPosts } from "@/functions/getPosts"
import { Experiences } from "@/components/pageContents/Experiences"

const pageState: PageState = {
  lang: Lang.En,
  pageName: "experiences",
  translatedLangs: {
    [Lang.Ja]: true,
    [Lang.En]: true,
  },
}

const Page: NextPage = async () => {
  const { data: postsData } = await getPosts(undefined, Lang.En)

  return (
    <PageContainer {...pageState}>
      <Experiences {...pageState} posts={postsData.posts.map((post) => post)} />
    </PageContainer>
  )
}

export default Page
