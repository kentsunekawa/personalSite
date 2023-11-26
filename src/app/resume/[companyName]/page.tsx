// import from libraries
import { NextPage } from "next"
import { notFound } from "next/navigation"

// import from this project
import { PageState } from "@/types"
import { Lang } from "@/graphql/generated/types"
// import { PageContainer } from "@/components/globals/PageContainer"
// import { getCommonData } from "@/functions/getCommonData"

import { companyNames } from "@/server/database/resumes"

export type Props = {
  params: { companyName: string }
}

const companyNamesArray = Object.entries(companyNames).map(([, value]) => value)

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
    return notFound()
    // const { params } = props

    // if (!(companyNamesArray as string[]).includes(params.companyName))
    //   return notFound()

    // const pageState = createPageState(lang, props)
    // const commonData = await getCommonData(lang)

    // return (
    //   <PageContainer {...pageState} commonData={commonData}>
    //     {/* <Resume {...pageState} resume={resume} /> */}
    //   </PageContainer>
    // )
  }
}

export default createPageComponent(Lang.Ja)

const generateStaticParams = async () => {
  const data = {
    companyNames: companyNamesArray,
  }

  return data.companyNames.map((companyName) => ({
    companyName,
  }))
}

export { generateStaticParams }
