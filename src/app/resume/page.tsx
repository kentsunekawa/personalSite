// import from libraries
import { NextPage } from "next"
import { notFound } from "next/navigation"

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
    [Lang.En]: true,
  },
})

export const createPageComponent = (lang: Lang): NextPage => {
  return async () => {
    const pageState = createPageState(lang)
    const companyName =
      lang === Lang.Ja ? companyNames.master : companyNames.masterEn
    const commonData = await getCommonData(lang)
    const {
      data: { resume },
    } = await getResume(companyName)

    if (resume.lang !== lang) return notFound()

    return (
      <PageContainer {...pageState} commonData={commonData}>
        <Resume {...pageState} companyName={companyName} resume={resume} />
      </PageContainer>
    )
  }
}

export default createPageComponent(Lang.Ja)
