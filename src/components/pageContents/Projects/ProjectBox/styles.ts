"use client"
// import from libraries
import { css } from "styled-components"

// import from this project

export const createStyles = () => {
  return {
    container: css``,
    skillIconList: {
      container: css`
        width: 100%;
      `,
      list: css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 4px;
      `,
      item: css`
        width: 40px;
      `,
    },
    main: {
      container: css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 16px 0;
      `,
      buttonArea: css`
        width: 100%;
      `,
      main: css`
        width: 100%;
      `,
    },
  }
}
