"use client"
// import from libraries

// import from this project
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export type Props = {
  value?: string
}

export const Temp: React.FC<Props> = ({ value }) => {
  const { styles } = useStyle(createStyles)
  return <div css={styles.container}>{value}</div>
}
