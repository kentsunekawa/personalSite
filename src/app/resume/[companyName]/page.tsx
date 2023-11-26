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

export type Props = {
  params: { companyName: string }
}

export const createPageState = (lang: Lang, props: Props): PageState => ({
  lang,
  pageName: "resume",
  translatedLangs: {
    [Lang.Ja]: true,
    [Lang.En]: true,
  },
  params: {
    companyName: props.params.companyName,
  },
})

export const createPageComponent = (lang: Lang): NextPage<Props> => {
  return async (props) => {
    const { params } = props
    const pageState = createPageState(lang, props)
    const commonData = await getCommonData(lang)
    const {
      data: { resume },
    } = await getResume(lang, params.companyName)

    if (resume.lang !== lang) return notFound()

    return (
      <PageContainer {...pageState} commonData={commonData}>
        <Resume
          {...pageState}
          companyName={params.companyName}
          resume={resume}
        />
      </PageContainer>
    )
  }
}

export default createPageComponent(Lang.Ja)

const generateStaticParams = async () => {
  const data = {
    companyNames: Object.entries(companyNames).map(([, value]) => value),
  }

  return data.companyNames.map((companyName) => ({
    companyName,
  }))
}

export { generateStaticParams }
