"use client"
// import from this project
import { PageState } from "@/types"
import { useStyle } from "@/hooks"
import { Lang, Project } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"
import { PageContent } from "@/components/parts/PageContent"
import { BoxList } from "@/components/parts/contents/BoxList"
import { Texts } from "@/components/parts/Texts"
import { ProjectBox } from "./ProjectBox"
import { createStyles } from "./styles"

type Props = PageState & {
  projects: Project[]
}

const contents = {
  [Lang.Ja]: {
    summary: "現在までに参画してきた主なプロジェクトです。",
  },
  [Lang.En]: {
    summary: "Projects I've been involved in until now.",
  },
}

export const Projects: React.FC<Props> = ({ lang, projects }) => {
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
        summary={
          <div>
            <Texts.Text>{contents[lang].summary}</Texts.Text>
          </div>
        }
      >
        <div css={styles.container}>
          <BoxList
            contents={projects.map((project) => ({
              key: project.id,
              node: <ProjectBox lang={lang} project={project} />,
            }))}
          />
        </div>
      </PageContent>
    </PageBase>
  )
}
