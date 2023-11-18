"use client"
// import from libraries
import { css } from "styled-components"

// import from this project

export const createStyles = () => {
  return {
    layout: {
      container: css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
      `,
    },
  }
}
