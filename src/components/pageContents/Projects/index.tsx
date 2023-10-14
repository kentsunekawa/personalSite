import { Lang, Project } from "@/graphql/generated/types"

import { PageBase } from "@/components/globals/PageBase"

type Props = {
  lang?: Lang
  projects: Project[]
}

export const Projects: React.FC<Props> = ({ lang = Lang.Ja, projects }) => {
  return <PageBase>{projects.map(({ title }) => title)}</PageBase>
}
