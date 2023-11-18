"use client"
// import from libraries

// import from this project
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export type Props = {
  contents: {
    key: string
    node: React.ReactNode
  }[]
}

export const BoxList: React.FC<Props> = ({ contents }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      <ul css={styles.list}>
        {contents.map(({ key, node }) => (
          <li key={key} css={styles.item}>
            {node}
          </li>
        ))}
      </ul>
    </div>
  )
}
