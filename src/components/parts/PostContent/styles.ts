"use client"
// import from libraries
import { css } from "styled-components"

// import from this project

export const createStyles = () => {
  return {
    container: css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      gap: 32px 0;
    `,
    headerArea: {
      container: css`
        width: 100%;
      `,
    },
    main: css`
      width: 100%;
    `,
  }
}
