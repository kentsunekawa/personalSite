"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"
import { hoveredLink } from "@/styles/mixin"

export const createStyles = () => {
  return {
    container: css``,
    list: css`
      display: flex;
      flex-wrap: wrap;
      gap: 8px 0;
    `,
    item: css`
      width: 100%;
    `,
    box: css`
      display: flex;
      flex-wrap: wrap;
      ${hoveredLink()}
    `,
    title: css`
      width: 100%;
    `,
    date: css`
      width: 100%;
    `,
  }
}
