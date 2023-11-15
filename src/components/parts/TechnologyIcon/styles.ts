"use client"
// import from libraries
import { css } from "styled-components"

// import from this project

export const createStyles = () => {
  return {
    container: css`
      width: 100%;
      border-radius: 4px;
      overflow: hidden;
    `,
    image: css`
      width: 100%;
      height: auto;
    `,
  }
}
