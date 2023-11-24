// import from libraries
import { NextPage } from "next"

// import from this project
import { PageState } from "@/types"
import { Lang } from "@/graphql/generated/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { getCommonData } from "@/functions/getCommonData"
import { Profile } from "@/components/pageContents/Profile"

const pageState: PageState = {
  lang: Lang.Ja,
  pageName: "profile",
  translatedLangs: {
    [Lang.Ja]: true,
    [Lang.En]: true,
  },
}

const Page: NextPage = async () => {
  const commonData = await getCommonData(Lang.Ja)

  return (
    <PageContainer {...pageState} commonData={commonData}>
      <Profile {...pageState} profile={commonData.profile} />
    </PageContainer>
  )
}

export default Page
