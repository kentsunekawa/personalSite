"use client"
// import from libraries

// import from this project
import { useStyle } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { createStyles } from "./styles"

export type Props = {
  title?: string
  children: React.ReactNode
}

export const Section: React.FC<Props> = ({ title, children }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      {title && (
        <div css={styles.title.container}>
          <Texts.Heading tag="h2" size="h6">
            {title}
          </Texts.Heading>
        </div>
      )}
      <div>{children}</div>
    </div>
  )
}
