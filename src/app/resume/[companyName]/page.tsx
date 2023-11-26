// import from libraries
import { NextPage } from "next"

// import from this project
import { PageState } from "@/types"
import { Lang } from "@/graphql/generated/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { getCommonData } from "@/functions/getCommonData"

import { Resume } from "@/components/pageContents/Resume"

export type Props = {
  params: { companyName: string }
}

export const createPageState = (lang: Lang): PageState => ({
  lang,
  pageName: "resume",
  translatedLangs: {
    [Lang.Ja]: true,
    [Lang.En]: true,
  },
})

export const createPageComponent = (lang: Lang): NextPage<Props> => {
  const pageState = createPageState(lang)
  return async ({ params }) => {
    const commonData = await getCommonData(lang)
    return (
      <PageContainer {...pageState} commonData={commonData}>
        <Resume {...pageState} companyName={params.companyName} />
      </PageContainer>
    )
  }
}

export default createPageComponent(Lang.Ja)
