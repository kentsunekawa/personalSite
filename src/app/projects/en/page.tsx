import { NextPage } from "next"

import { Lang } from "@/graphql/generated/types"
import { getProjects } from "@/functions/getProjects"
import { Projects } from "@/components/pageContents/Projects"

const Page: NextPage = async () => {
  const { data: projectsData } = await getProjects(Lang.En)

  return (
    <Projects
      lang={Lang.En}
      projects={projectsData.projects.map((project) => project)}
    />
  )
}

export default Page
