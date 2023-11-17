"use client"
// import from this project
import { PageState } from "@/types"
import { useStyle } from "@/hooks"
import { Project } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"
import { PageContent } from "@/components/parts/PageContent"
import { Texts } from "@/components/parts/Texts"
import { ProjectBox } from "./ProjectBox"
import { createStyles } from "./styles"

type Props = PageState & {
  projects: Project[]
}

export const Projects: React.FC<Props> = ({ lang, projects, ...pageState }) => {
  const { styles } = useStyle(createStyles)

  return (
    <PageBase>
      <PageContent
        breadCrumsInfo={{
          lang,
          clumbs: [
            {
              pageName: "home",
            },
            {
              isCurrent: true,
              pageName: "projects",
            },
          ],
        }}
        title="Projects"
        summary={<div>説明が入ります</div>}
      >
        <div css={styles.container}>
          <ul css={styles.list}>
            {projects.map((project) => (
              <li key={project.id} css={styles.item}>
                <ProjectBox lang={lang} project={project} />
              </li>
            ))}
          </ul>
        </div>
      </PageContent>
    </PageBase>
  )
}
