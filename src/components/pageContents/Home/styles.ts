"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"

export const createStyles = () => {
  return {
    container: css`
      position: relative;
      width: 100%;
      height: 100vh;
      min-height: 720px;
    `,
    main: css`
      position: relative;
    `,
    message: css`
      position: absolute;
      bottom: 50%;
      right: 0;
      width: 100%;
      border-bottom: 1px solid var(${VAR_NAMES.grayScale[80]});
      display: flex;
      flex-wrap: wrap;
      padding: 0 24px 4px;
    `,
    content: css`
      position: absolute;
      top: 50%;
      right: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      width: 100%;
      padding: 8px 24px 0;
      gap: 24px 0;
    `,
    nameArea: css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    `,
    name: css`
      width: 100%;
    `,
    businessTitle: css`
      width: 100%;
    `,
    accountsArea: css`
      width: 100%;
    `,
    postAre: css`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding-left: 24px;
    `,
    footer: css`
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0%;
    `,
  }
}
