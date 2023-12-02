// import from libraries
import { NextPage } from "next"

// import from this project
import { PageState } from "@/types"
import { Lang } from "@/graphql/generated/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { getCommonData } from "@/functions/getCommonData"
import { getResume } from "@/functions/getResume"
import { Resume } from "@/components/pageContents/Resume"

import { companyNames } from "@/server/database/resumes"

const createPageState = (lang: Lang): PageState => ({
  lang,
  pageName: "resume",
  translatedLangs: {
    [Lang.Ja]: true,
    [Lang.En]: false,
  },
})

export const createPageComponent = (lang: Lang): NextPage => {
  return async () => {
    const pageState = createPageState(lang)

    const commonData = await getCommonData(lang)

    return (
      <PageContainer {...pageState} commonData={commonData}>
        <Resume {...pageState} />
      </PageContainer>
    )
  }
}

export default createPageComponent(Lang.Ja)
