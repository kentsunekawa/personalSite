"use client"
// import from libraries
import React from "react"

// import from this project
import { InsertStyles } from "@/types"
import { useStyle } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { createStyles } from "./styles"

export type Props = {
  data: {
    label: string
    data: React.ReactNode
  }[]
  insertStyles?: InsertStyles<"container" | "row" | "dt" | "dtText" | "dd">
}

export const DefinitionTable: React.FC<Props> = ({ data, insertStyles }) => {
  const { styles } = useStyle(createStyles)

  return (
    <div css={[styles.container, insertStyles?.container]}>
      {data.map(({ label, data: main }) => (
        <div key={label} css={[styles.row, insertStyles?.row]}>
          <div css={[styles.dt, insertStyles?.dt]}>
            <Texts.Caption insertCss={insertStyles?.dtText}>
              {label}:
            </Texts.Caption>
          </div>
          <div css={[styles.dd, insertStyles?.dd]}>{main}</div>
        </div>
      ))}
    </div>
  )
}
