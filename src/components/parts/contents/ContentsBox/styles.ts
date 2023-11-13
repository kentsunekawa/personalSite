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
      gap: 16px 0;
    `,
    header: css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      gap: 4px 0;
    `,
    main: css`
      width: 100%;
    `,
    periodArea: {
      container: css`
        width: 100%;
      `,
      text: css``,
    },
    titleArea: {
      container: css`
        width: 100%;
      `,
    },
    subTitleArea: {
      container: css`
        width: 100%;
      `,
    },
  }
}
