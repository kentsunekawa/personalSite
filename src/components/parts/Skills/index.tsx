"use client"
// import from libraries

// import from this project
import { Skill as SkillType } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export type Skill = Pick<SkillType, "id" | "slug" | "name" | "proficiency">

export type Props = {
  skills: readonly Skill[]
}

export const Skills: React.FC<Props> = ({ skills }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      <div>
        {skills.length > 0 && (
          <ul>
            {skills.map(({ id, name, proficiency }) => (
              <li key={id}>
                <p>{name}</p>
                <p>{proficiency}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
