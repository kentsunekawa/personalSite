'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project

export const createStyles = () => {
  return {
    list: css`
      display: flex;
      flex-wrap: wrap;
      gap: 0 8px;
    `,
    currentButton: css`
      opacity: 0.3;
    `,
  }
}
