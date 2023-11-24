"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { mq } from "@/styles/mixin"

export const createStyles = () => {
  return {
    container: css`
      width: 100%;
    `,
    main: css`
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 24px;
    `,
    mainInner: css`
      width: 100%;
      max-width: 980px;
    `,
  }
}
