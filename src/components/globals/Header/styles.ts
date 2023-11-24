"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"
import { mq } from "@/styles/mixin"

export const createStyles = () => {
  const headerHeight = "56px"
  return {
    container: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: ${headerHeight};
      padding: 0 24px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
    `,
    bg: css`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: var(${VAR_NAMES.bg});
      opacity: 0.85;
      z-index: -1;
    `,
    menuArea: css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      gap: 0 18px;
    `,
    space: css`
      width: 100%;
      padding-top: ${headerHeight};
    `,
    spacer: css`
      display: block;
      width: 1px;
      height: 16px;
      background: var(${VAR_NAMES.fg});
    `,
  }
}
