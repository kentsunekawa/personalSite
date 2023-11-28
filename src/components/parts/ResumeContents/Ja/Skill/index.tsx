"use client"
// import from libraries
import { useMemo } from "react"

// import from this project
import { useStyle } from "@/hooks"
import { Skill as SkillType, Proficiency } from "@/graphql/generated/types"
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
      <div>
        <div>
          <p>メインスキル</p>
        </div>
        <div>
          <ul>
            {experiencedSkills.map(({ name, slug }) => (
              <li key={slug}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div>
          <p>その他スキル</p>
        </div>
        <div>
          <ul>
            {haveUsedSkills.map(({ name, slug }) => (
              <li key={slug}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
