// import from libraries
import { NextPage } from "next"

// import from this project
import { PageState } from "@/types"
import { Lang } from "@/graphql/generated/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { getPosts } from "@/functions/getPosts"
import { Experiences } from "@/components/pageContents/Experiences"

const pageState: PageState = {
  lang: Lang.Ja,
  pageName: "experiences",
}

const Page: NextPage = async () => {
  const { data: postsData } = await getPosts()

  return (
    <PageContainer {...pageState}>
      <Experiences
        pageName="experiences"
        posts={postsData.posts.map((post) => post)}
        lang={Lang.Ja}
      />
    </PageContainer>
  )
}

export default Page
