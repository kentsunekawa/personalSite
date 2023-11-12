"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"

export const createStyles = () => {
  return {
    container: css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 16px 0;
    `,
    main: css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 16px 0;
    `,
    nameArea: css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    `,
    row: css`
      width: 100%;
    `,
    image: css`
      border-radius: 4px;
      width: 100%;
      height: auto;
    `,
    dlStyles: {
      dtText: css`
        color: #777;
        line-height: 1.2em;
      `,
      dd: css`
        margin-bottom: 4px;
      `,
    },
  }
}
