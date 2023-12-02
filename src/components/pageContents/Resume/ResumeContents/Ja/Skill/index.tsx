"use client"
// import from libraries
import React, { useMemo } from "react"

// import from this project
import { useStyle } from "@/hooks"
import { Skill as SkillType, Proficiency } from "@/graphql/generated/types"
import { Texts } from "@/components/parts/Texts"
import { SubSection } from "../SubSection"
import { createStyles } from "./styles"

export type Props = {
  skills: readonly SkillType[]
}

export const Skill: React.FC<Props> = ({ skills }) => {
  const { styles } = useStyle(createStyles)

  const experiencedSkills = useMemo(
    () =>
      skills.filter(
        ({ proficiency }) => proficiency === Proficiency.Experienced
      ),
    [skills]
  )

  const haveUsedSkills = useMemo(
    () =>
      skills.filter(({ proficiency }) => proficiency === Proficiency.HaveUsed),
    [skills]
  )

  return (
    <div css={styles.container}>
      <div css={styles.row}>
        <ul css={styles.mainList.container}>
          {experiencedSkills.map(({ name, slug, summary }) => (
            <li key={slug} css={styles.mainList.item}>
              <div css={styles.mainList.title}>
                <Texts.Text size="s">{name}</Texts.Text>
              </div>
              <div css={styles.mainList.summary}>
                <Texts.Text size="s">{summary}</Texts.Text>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div css={styles.row}>
        <SubSection title="その他、開発で用いたことのある技術・ツール">
          <ul css={styles.otherList.container}>
            {haveUsedSkills.map(({ name, slug }, i) => (
              <React.Fragment key={slug}>
                <li>
                  <Texts.Text size="s">{name}</Texts.Text>
                </li>
                {i < haveUsedSkills.length - 1 && (
                  <li>
                    <Texts.Text size="s"> / </Texts.Text>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </SubSection>
      </div>
    </div>
  )
}
