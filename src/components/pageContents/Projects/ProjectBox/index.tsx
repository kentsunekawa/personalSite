"use client"
// import from libraries
// import from this project
import { useMemo, useState } from "react"
import { useStyle } from "@/hooks"
import { CONTENTS } from "@/constants"
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

const contents = {
  [Lang.Ja]: {
    responsibility: "責務",
    position: "担当ポジション",
    company: "組織",
    team: "チーム構成",
    technologies: "主な使用技術",
  },
  [Lang.En]: {
    responsibility: "Responsibility",
    position: "Position",
    company: "Company",
    team: "Team",
    technologies: "Technologies",
  },
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
              label: contents[lang].company,
              data: <Texts.Text>{belonging.name}</Texts.Text>,
            }
          : null,
        team
          ? {
              label: contents[lang].team,
              data: <Texts.Text>{team}</Texts.Text>,
            }
          : null,
        position
          ? {
              label: contents[lang].position,
              data: <Texts.Text>{position}</Texts.Text>,
            }
          : null,
        responsibility
          ? {
              label: contents[lang].responsibility,
              data: <Texts.Text>{responsibility}</Texts.Text>,
            }
          : null,
        technologies.length > 0
          ? {
              label: contents[lang].technologies,
              data: (
                <div css={styles.skillIconList.container}>
                  <Texts.Text>
                    {technologies.map(
                      ({ name }, i) =>
                        `${name}${i < technologies.length - 1 ? " / " : ""}`
                    )}
                  </Texts.Text>
                </div>
              ),
            }
          : null,
      ].filter((item): item is NonNullable<typeof item> => item !== null),
    [belonging, lang, position, responsibility, styles, team, technologies]
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
