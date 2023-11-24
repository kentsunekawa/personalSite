"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"

export const createStyles = () => {
  return {
    container: css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 110;
      background: var(${VAR_NAMES.bg});
    `,
    main: css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 40px;
    `,
    inner: css`
      padding: 40px;
    `,
    closeButton: css`
      position: absolute;
      top: 16px;
      right: 16px;
    `,
    nav: {
      container: css`
        width: 100%;
      `,
      list: css`
        display: flex;
        flex-wrap: wrap;
        gap: 32px 0;
      `,
      item: css`
        width: 100%;
      `,
      button: css`
        width: 100%;
      `,
      text: css`
        font-size: 16px;
      `,
    },
  }
}
