// import from libraries
import { NextPage } from "next"

// import from this project
import { PageState } from "@/types"
import { Lang } from "@/graphql/generated/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { getProfile } from "@/functions/getProfile"
import { Profile } from "@/components/pageContents/Profile"

const pageState: PageState = {
  lang: Lang.Ja,
  pageName: "profile",
}

const Page: NextPage = async () => {
  const { data: profileData } = await getProfile()

  return (
    <PageContainer {...pageState}>
      <Profile {...pageState} profile={profileData.profile} />
    </PageContainer>
  )
}

export default Page
