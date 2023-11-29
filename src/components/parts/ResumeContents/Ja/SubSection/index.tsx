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

export const SubSection: React.FC<Props> = ({ title, children }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      <div css={styles.title.container}>
        <Texts.Text weight="xb" insertCss={styles.title.text}>
          {title}
        </Texts.Text>
      </div>
      <div>{children}</div>
    </div>
  )
}
