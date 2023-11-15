"use client"
// import from libraries
// import from this project
import { useMemo } from "react"
import { useStyle } from "@/hooks"
import { TechnologyIcon } from "@/components/parts/TechnologyIcon"
import { Lang, Project } from "@/graphql/generated/types"
import { ContentsBox } from "@/components/parts/contents/ContentsBox"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"

import { createStyles } from "./styles"

export type Props = {
  lang: Lang
  project: Project
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
    description,
  } = project

  const metaInfo = useMemo(
    () =>
      [
        belonging
          ? {
              label: "Company",
              data: belonging.name,
            }
          : null,
        team
          ? {
              label: "Team",
              data: team,
            }
          : null,
        position
          ? {
              label: "Position",
              data: position,
            }
          : null,
        responsibility
          ? {
              label: "Responsibility",
              data: responsibility,
            }
          : null,
        technologies.length > 0
          ? {
              label: "Technologies",
              data: (
                <div css={styles.skillIconList.container}>
                  <ul css={styles.skillIconList.list}>
                    {technologies.map(({ slug }) => (
                      <li key={slug} css={styles.skillIconList.item}>
                        <TechnologyIcon slug={slug} />
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            }
          : null,
      ].filter((item): item is NonNullable<typeof item> => item !== null),
    [belonging, position, responsibility, styles, team, technologies]
  )

  return (
    <ContentsBox
      lang={lang}
      contents={{
        title: {
          tag: "h3",
          node: title,
        },
        subTitle: ``,
        period,
        metaInfo,
        main: description ? (
          <MarkdownDisplay>{description}</MarkdownDisplay>
        ) : null,
      }}
    />
  )
}
