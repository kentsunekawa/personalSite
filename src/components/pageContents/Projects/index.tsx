// import from this project
import { PageState } from "@/types"
import { Lang, Project } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"

type Props = PageState & {
  projects: Project[]
}

export const Projects: React.FC<Props> = ({ lang, projects }) => {
  return <PageBase>{projects.map(({ title }) => title)}</PageBase>
}
