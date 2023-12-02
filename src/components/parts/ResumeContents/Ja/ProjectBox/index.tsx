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
// import { ReplaceLineFeedCodeToBr } from "@/components/parts/ReplaceLineFeedCodeToBr"

import { createStyles } from "./styles"

export type Props = {
  lang: Lang
  project: Project
}

const contents = {
  period: "期間",
  responsibility: "担当業務",
  position: "ポジション",
  company: "組織",
  team: "チーム構成",
  technologies: "主な使用技術",
  now: "現在",
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
          label: contents.period,
          data: (
            <Texts.Text
              insertCss={styles.definitionTableStyles.dtText}
            >{`${formatDateString(period.start, lang)} - ${
              period.end
                ? `${formatDateString(period.end, lang)}`
                : contents.now
            }`}</Texts.Text>
          ),
        },
        belonging
          ? {
              label: contents.company,
              data: (
                <Texts.Text insertCss={styles.definitionTableStyles.dtText}>
                  {belonging.name}
                </Texts.Text>
              ),
            }
          : null,
        team
          ? {
              label: contents.team,
              data: (
                <Texts.Text insertCss={styles.definitionTableStyles.dtText}>
                  {team}
                </Texts.Text>
              ),
            }
          : null,
        position
          ? {
              label: contents.position,
              data: (
                <Texts.Text insertCss={styles.definitionTableStyles.dtText}>
                  {position}
                </Texts.Text>
              ),
            }
          : null,
        responsibility
          ? {
              label: contents.responsibility,
              data: (
                <Texts.Text insertCss={styles.definitionTableStyles.dtText}>
                  {responsibility}
                </Texts.Text>
              ),
            }
          : null,
        technologies.length > 0
          ? {
              label: contents.technologies,
              data: (
                <div css={styles.skillIconList.container}>
                  <Texts.Text insertCss={styles.definitionTableStyles.dtText}>
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
      lang,
      belonging,
      period.end,
      period.start,
      position,
      responsibility,
      styles,
      team,
      technologies,
    ]
  )

  return (
    <article css={styles.container}>
      <div css={[styles.section.container, styles.header.container]}>
        <div css={styles.section.row}>
          <Texts.SubHeading tag="h3" size="s">
            {title}
          </Texts.SubHeading>
        </div>
        {/* {summary && (
          <div css={[styles.section.row, textStyle.text.m]}>
            <Texts.Text size="s">
              <ReplaceLineFeedCodeToBr>{summary}</ReplaceLineFeedCodeToBr>
            </Texts.Text>
          </div>
        )} */}
        {metaInfo && (
          <div css={styles.section.row}>
            <DefinitionTable
              data={metaInfo}
              insertStyles={styles.definitionTableStyles}
            />
          </div>
        )}
      </div>
      {description && (
        <div css={styles.section.container}>
          <MarkdownDisplay insertStyles={styles.markdownStyle}>
            {description}
          </MarkdownDisplay>
        </div>
      )}
    </article>
  )
}
