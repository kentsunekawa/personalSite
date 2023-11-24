// import from libraries
import { NextPage } from "next"

// import from this project
import { PageState } from "@/types"
import { Lang } from "@/graphql/generated/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { getCommonData } from "@/functions/getCommonData"
import { NotFound } from "@/components/pageContents/notFound"

const pageState: PageState = {
  lang: Lang.Ja,
  pageName: "notFound",
  translatedLangs: {
    [Lang.Ja]: true,
    [Lang.En]: true,
  },
}

const Page: NextPage = async () => {
  const commonData = await getCommonData(Lang.Ja)

  return (
    <PageContainer {...pageState} commonData={commonData}>
      <NotFound {...pageState} />
    </PageContainer>
  )
}

export default Page
