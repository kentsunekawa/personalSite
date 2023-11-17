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
      width: 100%;
      gap: 24px 0;
    `,
    breadCrumArea: css`
      width: 100%;
    `,
    headerArea: {
      container: css`
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 24px 0;
      `,
      row: css`
        width: 100%;
      `,
    },
    main: css`
      width: 100%;
    `,
  }
}
