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
    inner: css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    `,
    closeButton: css`
      position: absolute;
      top: 16px;
      right: 16px;
    `,
    nav: {
      list: css`
        display: flex;
        flex-wrap: wrap;
        gap: 40px 0;
      `,
      item: css`
        width: 100%;
      `,
    },
  }
}
