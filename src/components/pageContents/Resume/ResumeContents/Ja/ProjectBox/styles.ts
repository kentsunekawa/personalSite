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
      border: 1px solid var(${VAR_NAMES.grayScale[80]});
      border-radius: 4px;
    `,
    inner: css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    `,
    header: {
      container: css`
        gap: 8px 0;
        border-bottom: 1px solid var(${VAR_NAMES.grayScale[80]});
      `,
    },
    section: {
      container: css`
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 20px;
      `,
      row: css`
        width: 100%;
      `,
      title: css`
        color: var(${VAR_NAMES.grayScale[20]});
      `,
    },
    definitionTableStyles: {
      container: css`
        gap: 2px;
      `,
      dt: css`
        width: 100px;
      `,
      dd: css`
        width: calc(100% - 104px);
      `,
      dtText: css`
        font-size: 12px;
      `,
    },
    main: {
      container: css`
        gap: 8px 0;
      `,
      row: css`
        width: 100%;
      `,
    },
    skillIconList: {
      container: css`
        width: 100%;
      `,
    },
    markdownStyle: {
      container: css`
        p,
        li {
          font-size: 12px;
        }
        h4,
        h5 {
          color: var(${VAR_NAMES.grayScale[30]});
          margin-bottom: 8px !important;
          margin-top: 16px !important;
        }
      `,
    },
  }
}
