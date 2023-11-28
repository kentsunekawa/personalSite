"use client"
// import from libraries
import { useMemo } from "react"
// import from this project
import { useStyle, useTextStyles } from "@/hooks"
import { formatDateString } from "@/utils"
import { Lang, Project } from "@/graphql/generated/types"
import { Texts } from "@/components/parts/Texts"
import { DefinitionTable } from "@/components/parts/DefinitionTable"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"
import { ReplaceLineFeedCodeToBr } from "@/components/parts/ReplaceLineFeedCodeToBr"

import { createStyles } from "./styles"

export type Props = {
  lang: Lang
  project: Project
}

const contents = {
  [Lang.Ja]: {
    period: "期間",
    responsibility: "業務",
    position: "ポジション",
    company: "組織",
    team: "チーム構成",
    technologies: "主な使用技術",
    now: "現在",
  },
  [Lang.En]: {
    period: "Period",
    responsibility: "Responsibility",
    position: "Position",
    company: "Company",
    team: "Team",
    technologies: "Technologies",
    now: "now",
  },
}

export const ProjectBox: React.FC<Props> = ({ lang, project }) => {
  const { styles } = useStyle(createStyles)
  const { styles: textStyle } = useTextStyles()

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
        {
          label: contents[lang].period,
          data: (
            <Texts.Text size="s">{`${formatDateString(period.start, lang)} - ${
              period.end
                ? `${formatDateString(period.end, lang)}`
                : contents[lang].now
            }`}</Texts.Text>
          ),
        },
        belonging
          ? {
              label: contents[lang].company,
              data: <Texts.Text size="s">{belonging.name}</Texts.Text>,
            }
          : null,
        team
          ? {
              label: contents[lang].team,
              data: <Texts.Text size="s">{team}</Texts.Text>,
            }
          : null,
        position
          ? {
              label: contents[lang].position,
              data: <Texts.Text size="s">{position}</Texts.Text>,
            }
          : null,
        responsibility
          ? {
              label: contents[lang].responsibility,
              data: <Texts.Text size="s">{responsibility}</Texts.Text>,
            }
          : null,
        technologies.length > 0
          ? {
              label: contents[lang].technologies,
              data: (
                <div css={styles.skillIconList.container}>
                  <Texts.Text size="s">
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
    [
      belonging,
      lang,
      period.end,
      period.start,
      position,
      responsibility,
      styles.skillIconList.container,
      team,
      technologies,
    ]
  )

  return (
    <article css={styles.container}>
      <div css={[styles.section.container, styles.header.container]}>
        <div css={styles.section.row}>
          <Texts.Heading tag="h3" size="h3">
            {title}
          </Texts.Heading>
        </div>
        {summary && (
          <div css={[styles.section.row, textStyle.text.m]}>
            <Texts.Text>
              <ReplaceLineFeedCodeToBr>{summary}</ReplaceLineFeedCodeToBr>
            </Texts.Text>
          </div>
        )}
        {metaInfo && (
          <div css={styles.section.row}>
            <DefinitionTable data={metaInfo} />
          </div>
        )}
      </div>
      {description && (
        <div css={styles.section.container}>
          <div css={styles.section.row}>
            <Texts.SubHeading tag="h4" size="s" weight="b">
              詳細
            </Texts.SubHeading>
          </div>
          <div css={styles.section.row}>
            <MarkdownDisplay>{description}</MarkdownDisplay>
          </div>
        </div>
      )}
    </article>
  )
}
