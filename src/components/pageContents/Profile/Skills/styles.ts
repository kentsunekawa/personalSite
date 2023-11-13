"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { limitTextRow } from "@/styles/mixin"
import { mq } from "@/styles/mixin"

const createItemStyle = (numInRow: number, gap: number) => css`
  width: calc(${100 / numInRow}% - ${(gap * numInRow) / (numInRow - 1)}px);
`

export const createStyles = () => {
  return {
    container: css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      gap: 24px 0;
    `,
    section: css`
      width: 100%;
    `,
    list: css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      gap: 8px;
    `,
    item: css`
      ${createItemStyle(2, 8)}
      ${mq("tbMin_gt", createItemStyle(3, 8))}
    `,
    box: {
      container: css`
        display: flex;
        flex-wrap: wrap;
        gap: 0 8px;
      `,
      imageWrapper: css`
        width: 32px;
        border-radius: 4px;
        overflow: hidden;
      `,
      image: css`
        width: 100%;
        height: auto;
      `,
      nameWrapper: css`
        display: flex;
        align-items: center;
        width: calc(100% - 40px);
      `,
      name: css`
        ${limitTextRow(1)}
        text-align: left;
      `,
    },
  }
}
