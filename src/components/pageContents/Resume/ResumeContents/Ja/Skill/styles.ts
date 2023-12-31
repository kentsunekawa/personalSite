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
      gap: 16px 0;
    `,
    row: css`
      width: 100%;
    `,

    mainList: {
      container: css`
        display: flex;
        flex-wrap: wrap;
        border: 1px solid var(${VAR_NAMES.grayScale[80]});
        border-right: none;
        border-bottom: none;
        border-radius: 4px;
        overflow: hidden;
      `,
      item: css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid var(${VAR_NAMES.grayScale[80]});
        border-right: 1px solid var(${VAR_NAMES.grayScale[80]});
      `,
      title: css`
        width: 116px;
        padding: 2px 8px;
        background: var(${VAR_NAMES.grayScale[95]});
      `,
      summary: css`
        width: calc(100% - 116px);
        padding: 2px 8px;
      `,
    },
    otherList: {
      container: css`
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      `,
    },
  }
}
