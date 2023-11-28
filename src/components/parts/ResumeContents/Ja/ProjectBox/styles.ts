"use client"
// import from libraries
import { css } from "styled-components"

// import from this project

export const createStyles = () => {
  return {
    container: css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
    `,
    inner: css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    `,
    header: {
      container: css`
        border-bottom: 1px solid #ddd;
      `,
    },
    section: {
      container: css`
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 16px 0;
        padding: 24px;
        border-bottom: 1px solid #ddd;
      `,
      row: css`
        width: 100%;
      `,
    },
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
  }
}
