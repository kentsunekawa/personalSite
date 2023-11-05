// import from libraries
import { NextPage } from "next"

// import from this project
import { PageState } from "@/types"
import { Lang } from "@/graphql/generated/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { getProjects } from "@/functions/getProjects"
import { Projects } from "@/components/pageContents/Projects"

const pageState: PageState = {
  lang: Lang.Ja,
  pageName: "projects",
  translatedLangs: {
    [Lang.Ja]: true,
    [Lang.En]: false,
  },
}

const Page: NextPage = async () => {
  const { data: projectsData } = await getProjects()

  return (
    <PageContainer {...pageState}>
      <Projects
        {...pageState}
        projects={projectsData.projects.map((project) => project)}
      />
    </PageContainer>
  )
}

export default Page
