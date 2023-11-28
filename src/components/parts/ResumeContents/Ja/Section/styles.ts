"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"

export const createStyles = () => {
  return {
    container: css`
      display: flex;
      flex-wrap: wrap;
      gap: 8px 0;
      width: 100%;
    `,
    title: {
      container: css`
        width: 100%;
      `,
      text: css``,
    },
    main: css`
      width: 100%;
    `,
  }
}
