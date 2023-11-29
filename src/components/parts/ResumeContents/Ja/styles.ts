"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"
import { mq } from "@/styles/mixin"

export const createStyles = () => {
  return {
    container: css`
      display: flex;
      flex-wrap: wrap;
      gap: 16px 0;
      width: 100%;
      border-radius: 4px;
      ${mq(
        "screen",
        css`
          max-width: 800px;
          margin: 0 auto;
        `
      )}
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
    markdownStyle: {
      container: css`
        h3 {
          color: var(${VAR_NAMES.grayScale[30]});
        }
      `,
    },
  }
}
