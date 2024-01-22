'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'

export const createStyles = () => {
  return {
    container: css`
      width: 100%;
    `,
    list: css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
    `,
    notCurrent: css`
      opacity: 0.3;
    `,
    separator: css`
      display: block;
      width: 8px;
      height: 2px;
      opacity: 0.3;
      background: var(${VAR_NAMES.fg});
    `,
  }
}
