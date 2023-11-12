"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"
import { limitTextRow } from "@/styles/mixin"

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
    item: {
      common: css``,
      primary: css`
        width: calc(${100 / 6}% - ${(8 * 6) / 5}px);
      `,
      secondary: css`
        width: calc(${100 / 8}% - ${(8 * 8) / 7}px);
      `,
    },
    box: {
      container: css`
        display: flex;
        flex-wrap: wrap;
        gap: 4px 0;
      `,
      imageWrapper: css`
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
      `,
      image: css`
        width: 100%;
        height: auto;
      `,
      nameWrapper: css`
        width: 100%;
      `,
      name: css`
        ${limitTextRow(1)}
      `,
    },
  }
}
