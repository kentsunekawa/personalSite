"use client"
// import from libraries
import { useMemo } from "react"

// import from this project
import { Skill as SkillType } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { TechnologyIcon } from "@/components/parts/TechnologyIcon"
import { createStyles } from "./styles"

export type Skill = Pick<SkillType, "id" | "slug" | "name" | "proficiency">

export type Props = {
  skills: readonly Skill[]
}

type BoxProps = {
  name: string
  slug: string
}

const Box: React.FC<BoxProps> = ({ name, slug }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.box.container}>
      <div css={styles.box.imageWrapper}>
        <TechnologyIcon slug={slug} />
      </div>
      <div css={styles.box.nameWrapper}>
        <Texts.Text insertCss={styles.box.name} title={name}>
          {name}
        </Texts.Text>
      </div>
    </div>
  )
}

export const Skills: React.FC<Props> = ({ skills }) => {
  const { styles } = useStyle(createStyles)

  const experiencedSkills = useMemo(
    () => skills.filter(({ proficiency }) => proficiency === "EXPERIENCED"),
    [skills]
  )
  const otherSkills = useMemo(
    () => skills.filter(({ proficiency }) => proficiency === "HAVE_USED"),
    [skills]
  )

  return (
    <div css={styles.container}>
      {experiencedSkills.length > 0 && (
        <div css={styles.section}>
          <ul css={styles.list}>
            {experiencedSkills.map(({ id, name, slug }) => (
              <li key={id} css={styles.item}>
                <Box slug={slug} name={name} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {otherSkills.length > 0 && (
        <div css={styles.section}>
          <ul css={styles.list}>
            {otherSkills.map(({ id, name, slug }) => (
              <li key={id} css={styles.item}>
                <Box slug={slug} name={name} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
