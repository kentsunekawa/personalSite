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
      gap: 24px 0;
    `,
    section: {
      container: css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 8px 0;
      `,
      titleArea: css`
        width: 100%;
      `,
      main: css`
        width: 100%;
      `,
    },
  }
}
