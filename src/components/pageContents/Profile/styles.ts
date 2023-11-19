"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"
import { mq } from "@/styles/mixin"

export const createStyles = () => {
  return {
    layout: {
      container: css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 32px;
      `,
      main: css`
        width: 100%;
        ${mq(
          "tbMin_gt",
          css`
            width: calc(100% - 332px);
          `
        )}
      `,
      sub: css`
        width: 100%;
        ${mq(
          "tbMin_gt",
          css`
            width: 300px;
          `
        )}
      `,
    },
  }
}
