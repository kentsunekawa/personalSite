"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { mq } from "@/styles/mixin"

export const createStyles = () => {
  return {
    container: css`
      display: flex;
      width: 100%;
      height: 120px;
      justify-content: center;
      align-items: flex-end;
      padding: 24px;
      ${mq(
        "tbMin_gt",
        css`
          justify-content: flex-end;
        `
      )}
    `,
    content: {
      container: css`
        display: flex;
        flex-wrap: wrap;
      `,
      row: css`
        width: 100%;
      `,
    },
    accounts: {
      list: css`
        justify-content: flex-end;
      `,
    },
  }
}
