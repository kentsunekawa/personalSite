"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"
import { fonts, mq } from "@/styles/mixin"

export const createStyles = () => {
  return {
    container: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 56px;
      padding: 0 16px;
      ${mq(
        "tbMin_gt",
        css`
          padding: 0 24px;
        `
      )}
    `,
    name: css`
      ${fonts().inter}
    `,
    menuArea: css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      gap: 0 18px;
    `,
  }
}
