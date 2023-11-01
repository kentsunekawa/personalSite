// import from libraries
import { NextPage } from "next"

// import from this project
import { PageState } from "@/types"
import { Lang } from "@/graphql/generated/types"
import { PageContainer } from "@/components/globals/PageContainer"
import { getProjects } from "@/functions/getProjects"
import { Projects } from "@/components/pageContents/Projects"

const pageState: PageState = {
  lang: Lang.En,
  pageName: "projects",
}

const Page: NextPage = async () => {
  const { data: projectsData } = await getProjects(Lang.En)

  return (
    <PageContainer {...pageState}>
      <Projects
        pageName="projects"
        lang={Lang.En}
        projects={projectsData.projects.map((project) => project)}
      />
    </PageContainer>
  )
}

export default Page
