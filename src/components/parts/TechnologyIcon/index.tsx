"use client"
// import from libraries
import Image from "next/image"

// import from this project
import { useStyle } from "@/hooks"
import { geTechnologyImagePath } from "@/utils"
import { createStyles } from "./styles"

export type Props = {
  slug: string
}

export const TechnologyIcon: React.FC<Props> = ({ slug }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      <Image
        src={geTechnologyImagePath(slug)}
        alt=""
        width={100}
        height={100}
        css={styles.image}
      />
    </div>
  )
}
