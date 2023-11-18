"use client"
// import from libraries
// import from this project
import { useMemo, useState } from "react"
import { useStyle } from "@/hooks"
import { TechnologyIcon } from "@/components/parts/TechnologyIcon"
import { Lang, Project } from "@/graphql/generated/types"
import { ContentsBox } from "@/components/parts/contents/ContentsBox"
import { Texts } from "@/components/parts/Texts"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"

import { createStyles } from "./styles"

export type Props = {
  lang: Lang
  project: Project
}

export const ProjectBox: React.FC<Props> = ({ lang, project }) => {
  const { styles } = useStyle(createStyles)

  const [isOpen, setIsOpen] = useState<boolean>(false)

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
              data: <Texts.Text>{belonging.name}</Texts.Text>,
            }
          : null,
        team
          ? {
              label: "Team",
              data: <Texts.Text>{team}</Texts.Text>,
            }
          : null,
        position
          ? {
              label: "Position",
              data: <Texts.Text>{position}</Texts.Text>,
            }
          : null,
        responsibility
          ? {
              label: "Responsibility",
              data: <Texts.Text>{responsibility}</Texts.Text>,
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
        period,
        metaInfo,
        moreArea: description ? (
          <MarkdownDisplay>{description}</MarkdownDisplay>
        ) : null,
      }}
    />
  )
}
