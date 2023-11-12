"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"
import { fonts, mq } from "@/styles/mixin"

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
      background: var(${VAR_NAMES.bg});
    `,
    name: css`
      ${fonts().en}
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
  }
}
