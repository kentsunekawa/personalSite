"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"

export const createStyles = () => {
  return {
    container: css`
      display: flex;
      flex-wrap: wrap;
    `,
    dt: css`
      width: 100%;
    `,
    dd: css`
      width: 100%;
    `,
  }
}
