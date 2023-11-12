"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"

export const createStyles = () => {
  return {
    container: css``,
    list: css`
      display: flex;
      flex-wrap: wrap;
      gap: 0 16px;
    `,
  }
}
