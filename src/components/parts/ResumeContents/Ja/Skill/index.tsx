"use client"
// import from libraries
import { useMemo } from "react"

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
        <SubSection title="メインスキル">
          <ul css={styles.list.container}>
            {experiencedSkills.map(({ name, slug, summary }) => (
              <li key={slug} css={[styles.list.item, styles.mainSkill.item]}>
                <div css={[styles.list.title, styles.mainSkill.title]}>
                  <Texts.Text size="s">{name}</Texts.Text>
                </div>
                <div css={styles.mainSkill.summary}>
                  <Texts.Text size="s">{summary}</Texts.Text>
                </div>
              </li>
            ))}
          </ul>
        </SubSection>
      </div>
      <div css={styles.row}>
        <SubSection title="その他、開発で用いたことのあるスキル">
          <ul css={styles.list.container}>
            {haveUsedSkills.map(({ name, slug }) => (
              <li key={slug} css={styles.list.item}>
                <div css={styles.list.title}>
                  <Texts.Text size="s">{name}</Texts.Text>
                </div>
              </li>
            ))}
          </ul>
        </SubSection>
      </div>
    </div>
  )
}
