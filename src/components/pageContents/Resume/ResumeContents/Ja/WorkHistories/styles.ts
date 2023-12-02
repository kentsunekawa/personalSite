"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"

export const createStyles = () => {
  return {
    container: css`
      width: 100%;
    `,
    list: css`
      display: flex;
      flex-wrap: wrap;
      gap: 4px 0;
      width: 100%;
    `,
    item: css`
      width: 100%;
    `,
    box: css`
      width: 100%;
      display: flex;
      gap: 0 8px;
      align-items: center;
    `,
    date: css`
      width: 136px;
    `,
    name: css`
      display: flex;
      gap: 0 16px;
      width: calc(100% - 144px);
      align-content: flex-end;
      align-items: center;
      justify-content: space-between;
    `,
  }
}
