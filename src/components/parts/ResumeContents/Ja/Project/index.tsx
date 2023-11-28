"use client"
// import from libraries

// import from this project
import { useStyle } from "@/hooks"
import { Project as ProjectType } from "@/graphql/generated/types"
import { createStyles } from "./styles"

export type Props = {
  project: ProjectType
}

export const Project: React.FC<Props> = ({ project }) => {
  const { styles } = useStyle(createStyles)

  const {
    title,
    belonging,
    description,
    period,
    position,
    responsibility,
    summary,
    team,
    technologies,
  } = project

  return <div css={styles.container}>{title}</div>
}
