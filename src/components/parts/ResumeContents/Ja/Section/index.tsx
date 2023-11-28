"use client"
// import from libraries

// import from this project
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export type Props = {
  title: string
  children: React.ReactNode
}

export const Section: React.FC<Props> = ({ title, children }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      <div css={styles.title.container}>
        <h2 css={styles.title.text}>{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  )
}
