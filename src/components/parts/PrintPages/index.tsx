"use client"
// import from libraries

// import from this project
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export type Props = {
  pages: React.ReactNode[]
}

export const PrintPages: React.FC<Props> = ({ pages }) => {
  const { styles } = useStyle(createStyles)
  return pages.map((page, i) => (
    <div
      css={[styles.container, i === pages.length - 1 && styles.last]}
      key={`${i.toString()}`}
    >
      {page}
    </div>
  ))
}
