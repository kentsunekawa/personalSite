'use client'
// import from libraries
import { useMemo } from 'react'
// import from this project
import { useStyle } from '@/hooks'
import { Lang, Project } from '@/graphql/generated/types'
import { ContentsBox } from '@/components/parts/contents/ContentsBox'
import { createPeriodText } from '@/utils'
import { MarkdownDisplay } from '@/components/parts/MarkdownDisplay'
import { ReplaceLineFeedCodeToBr } from '@/components/parts/ReplaceLineFeedCodeToBr'

import { createStyles } from './styles'

export type Props = {
  lang: Lang
  project: Project
}

const contents = {
  [Lang.Ja]: {
    responsibility: '業務',
    position: 'ポジション',
    company: '組織',
    team: 'チーム構成',
    technologies: '主な使用技術',
  },
  [Lang.En]: {
    responsibility: 'Responsibility',
    position: 'Position',
    company: 'Company',
    team: 'Team',
    technologies: 'Technologies',
  },
}

export const ProjectBox: React.FC<Props> = ({ lang, project }) => {
  const { styles } = useStyle(createStyles)

  const {
    // id,
    // slug,
    title,
    period,
    position,
    responsibility,
    team,
    technologies,
    belonging,
    summary,
    description,
  } = project

  const metaInfo = useMemo(
    () =>
      [
        belonging
          ? {
              label: contents[lang].company,
              data: belonging.name,
            }
          : null,
        team
          ? {
              label: contents[lang].team,
              data: team,
            }
          : null,
        position
          ? {
              label: contents[lang].position,
              data: position,
            }
          : null,
        responsibility
          ? {
              label: contents[lang].responsibility,
              data: responsibility,
            }
          : null,
        technologies.length > 0
          ? {
              label: contents[lang].technologies,
              data: technologies.map(
                ({ name }, i) =>
                  `${name}${i < technologies.length - 1 ? ' / ' : ''}`,
              ),
            }
          : null,
      ].filter((item): item is NonNullable<typeof item> => item !== null),
    [belonging, lang, position, responsibility, team, technologies],
  )

  return (
    <ContentsBox
      contents={{
        title: {
          tag: 'h3',
          node: title,
        },
        caption: createPeriodText(period, lang),
        metaInfo,
        summary: summary && (
          <ReplaceLineFeedCodeToBr>{summary}</ReplaceLineFeedCodeToBr>
        ),
        moreArea: description ? (
          <MarkdownDisplay>{description}</MarkdownDisplay>
        ) : null,
      }}
    />
  )
}
