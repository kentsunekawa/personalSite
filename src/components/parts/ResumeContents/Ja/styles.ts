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
      gap: 16px 0;
      width: 100%;
      padding: 48px;
      border: 1px solid #ddd;
      border-radius: 4px;
    `,
    header: {
      container: css`
        display: flex;
        flex-wrap: wrap;
        gap: 24px 0;
        width: 100%;
      `,
      title: {
        container: css`
          width: 100%;
        `,
      },
      meta: {
        container: css`
          display: flex;
          flex-wrap: wrap;
          gap: 4px 0;
          width: 100%;
        `,
        row: css`
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          width: 100%;
        `,
      },
    },
    main: css`
      display: flex;
      flex-wrap: wrap;
      gap: 24px 0;
      width: 100%;
    `,
    section: css`
      width: 100%;
    `,
    list: {
      container: css`
        display: flex;
        flex-wrap: wrap;
        gap: 24px 0;
        width: 100%;
      `,
      row: css`
        width: 100%;
      `,
    },
  }
}
