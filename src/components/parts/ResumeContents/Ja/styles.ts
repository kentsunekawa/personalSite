"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"
import { mq } from "@/styles/mixin"

export const createStyles = () => {
  return {
    container: css`
      ${mq(
        "screen",
        css`
          max-width: 800px;
          margin: 0 auto;
        `
      )}
    `,
    main: css`
      display: flex;
      flex-wrap: wrap;
      gap: 20px 0;
      width: 100%;
    `,
    header: {
      container: css`
        display: flex;
        flex-wrap: wrap;
        gap: 16px 0;
        width: 100%;
      `,
      title: {
        container: css`
          width: 100%;
        `,
        text: css`
          letter-spacing: 0.2em;
        `,
      },
      meta: {
        container: css`
          display: flex;
          flex-wrap: wrap;
          gap: 2px 0;
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
    section: css`
      width: 100%;
    `,
    list: {
      container: css`
        display: flex;
        flex-wrap: wrap;
        gap: 12px 0;
        width: 100%;
      `,
      row: css`
        width: 100%;
      `,
    },
    markdownStyle: {
      container: css`
        h3,
        h4 {
          color: var(${VAR_NAMES.grayScale[30]});
          margin-bottom: 8px !important;
        }
      `,
    },
  }
}
