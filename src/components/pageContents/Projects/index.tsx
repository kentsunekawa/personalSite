"use client"
// import from this project
import { PageState } from "@/types"
import { Project } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"
import { Texts } from "@/components/parts/Texts"
import { ProjectBox } from "./ProjectBox"

type Props = PageState & {
  projects: Project[]
}

export const Projects: React.FC<Props> = ({ lang, projects, ...pageState }) => {
  return (
    <PageBase>
      <div>
        <Texts.Heading tag="h1">Projects</Texts.Heading>
        <Texts.Text>説明が入ります</Texts.Text>
      </div>
      <div>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectBox lang={lang} project={project} />
            </li>
          ))}
        </ul>
      </div>
    </PageBase>
  )
}
