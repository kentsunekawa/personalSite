"use client"
// import from libraries
import { css } from "styled-components"

// import from this project

export const createStyles = () => {
  return {
    container: css`
      width: 100%;
    `,
    list: css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 0 4px;
    `,
    button: {
      container: css`
        font-size: 20px;
        line-height: 1em;
      `,
    },
  }
}
