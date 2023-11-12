"use client"
// import from libraries
import React from "react"

// import from this project
import { Css, InsertStyles } from "@/types"
import { useStyle } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { createStyles } from "./styles"

export type Props = {
  data: {
    label: string
    data: React.ReactNode
  }[]
  insertStyles?: InsertStyles<"container" | "dtText" | "dd">
}

export const DefinitionTable: React.FC<Props> = ({ data, insertStyles }) => {
  const { styles } = useStyle(createStyles)

  return (
    <dl css={[styles.container, insertStyles?.container]}>
      {data.map(({ label, data: main }) => (
        <React.Fragment key={label}>
          <dt css={styles.dt}>
            <Texts.Caption insertCss={insertStyles?.dtText}>
              {label}:
            </Texts.Caption>
          </dt>
          <dd css={[styles.dd, insertStyles?.dd]}>{main}</dd>
        </React.Fragment>
      ))}
    </dl>
  )
}
