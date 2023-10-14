import { NextPage } from "next"

import { getProjects } from "@/functions/getProjects"
import { Projects } from "@/components/pageContents/Projects"

const Page: NextPage = async () => {
  const { data: projectsData } = await getProjects()

  return <Projects projects={projectsData.projects.map((project) => project)} />
}

export default Page
