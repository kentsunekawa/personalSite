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
    summaryArea: css`
      width: 100%;
    `,
    definitionTableStyles: {},
    main: css`
      width: 100%;
    `,
    moreArea: {
      container: css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 16px 0;
      `,
      main: css`
        width: 100%;
      `,
      buttonArea: css`
        width: 100%;
      `,
    },
  }
}
