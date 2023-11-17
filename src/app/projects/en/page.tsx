// import from libraries
import { NextPage } from "next"

// import from this project
import { PageState } from "@/types"
import { Lang } from "@/graphql/generated/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { getCommonData } from "@/functions/getCommonData"
import { getProjects } from "@/functions/getProjects"
import { Projects } from "@/components/pageContents/Projects"

const pageState: PageState = {
  lang: Lang.En,
  pageName: "projects",
  translatedLangs: {
    [Lang.Ja]: true,
    [Lang.En]: false,
  },
}

const Page: NextPage = async () => {
  const { data: projectsData } = await getProjects(Lang.En)
  const commonData = await getCommonData(Lang.En)

  return (
    <PageContainer {...pageState} commonData={commonData}>
      <Projects
        {...pageState}
        projects={projectsData.projects.map((project) => project)}
      />
    </PageContainer>
  )
}

export default Page
