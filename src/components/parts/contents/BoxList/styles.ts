"use client"
// import from libraries
import { css } from "styled-components"

export const createStyles = () => {
  return {
    container: css``,
    list: css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      gap: 24px 0;
    `,
    item: css`
      width: 100%;
    `,
  }
}
