"use client"
// import from libraries
import { useMemo } from "react"
import Image from "next/image"

// import from this project
import { Skill as SkillType } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { createStyles } from "./styles"

export type Skill = Pick<SkillType, "id" | "slug" | "name" | "proficiency">

export type Props = {
  skills: readonly Skill[]
}

type BoxProps = {
  src: string
  name: string
}

const Box: React.FC<BoxProps> = ({ src, name }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.box.container}>
      <div css={styles.box.imageWrapper}>
        <Image
          src="/img/techImages/react.png"
          alt=""
          width={100}
          height={100}
          css={styles.box.image}
        />
      </div>
      <div css={styles.box.nameWrapper}>
        <Texts.Text
          size="s"
          align="center"
          insertCss={styles.box.name}
          title={name}
        >
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
            {experiencedSkills.map(({ id, name }) => (
              <li key={id} css={[styles.item.common, styles.item.primary]}>
                <Box src="/img/techImages/react.png" name={name} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {otherSkills.length > 0 && (
        <div css={styles.section}>
          <ul css={styles.list}>
            {otherSkills.map(({ id, name }) => (
              <li key={id} css={[styles.item.common, styles.item.secondary]}>
                <Box src="/img/techImages/react.png" name={name} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
