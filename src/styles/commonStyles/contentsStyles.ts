// import from libraries
import { css } from "styled-components"

// import from this project
import { StyleBaseData } from "@/hooks"

export const createStyles = () => {
  return {
    contentsList: {
      list: css`
        display: flex;
        flex-wrap: wrap;
        gap: 20px 0;
        width: 100%;
      `,
      item: css`
        width: 100%;
      `,
    },
  }
}
