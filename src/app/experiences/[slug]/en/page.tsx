// import from libraries
import { NextPage } from "next"
import { redirect } from "next/navigation"

// import from this project
import { PageState } from "@/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { Lang } from "@/graphql/generated/types"
import { getPosts } from "@/functions/getPosts"
import { getPost } from "@/functions/getPost"
import { Experience } from "@/components/pageContents/Experience"

type Props = {
  params: { slug: string }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { data: postData } = await getPost(params.slug, Lang.En)

  const pageState: PageState = {
    lang: Lang.En,
    pageName: "experience",
    translatedLangs: {
      [Lang.Ja]: true,
      [Lang.En]: true,
    },
    pathInfo: {
      slug: params.slug,
    },
  }

  if (!postData.post) return redirect("/404")

  return (
    <PageContainer {...pageState}>
      <Experience {...pageState} post={postData.post} />
    </PageContainer>
  )
}

export default Page

export async function generateStaticParams() {
  const { data } = await getPosts(undefined, Lang.En)

  return data.posts.map(({ slug }) => ({
    slug,
  }))
}
