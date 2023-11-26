"use client"
// import from libraries

// import from this project
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"
import { Props } from "../"

export const En: React.FC<Props> = ({ profile, resume }) => {
  const { styles } = useStyle(createStyles)
  return <div css={styles.container}>resume</div>
}
