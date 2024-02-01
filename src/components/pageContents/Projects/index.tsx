'use client'
// import from this project
import { PageState } from '@/types'
import { Lang, Project } from '@/graphql/generated/types'
import { PageBase } from '@/components/globals/PageBase'
import { PageContent } from '@/components/parts/PageContent'
import { BoxList } from '@/components/parts/contents/BoxList'
import { SectionBox } from '@/components/parts/SectionBox'
import { ProjectBox } from './ProjectBox'

type Props = PageState & {
  projects: Project[]
}

const contents = {
  [Lang.Ja]: {
    summary: '現在までに参画してきた主なプロジェクトです。',
  },
  [Lang.En]: {
    summary: "Projects I've been involved in until now.",
  },
}

export const Projects: React.FC<Props> = ({ lang, projects }) => {
  return (
    <PageBase>
      <PageContent
        breadCrumsInfo={{
          lang,
          clumbs: [
            {
              pageName: 'home',
            },
            {
              isCurrent: true,
              pageName: 'projects',
            },
          ],
        }}
        summary={contents[lang].summary}
      >
        <SectionBox
          title={{
            tag: 'h2',
            text: 'PROJECTS',
          }}
          main={
            <BoxList
              gap={[8, 0]}
              contents={projects.map((project) => ({
                key: project.id,
                node: <ProjectBox lang={lang} project={project} />,
              }))}
            />
          }
        />
      </PageContent>
    </PageBase>
  )
}
