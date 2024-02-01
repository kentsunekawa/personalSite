'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'

export const createStyles = () => {
  return {
    container: css`
      padding-top: 72px;
    `,
    inner: css`
      width: 100%;
      padding: 0 24px;
      max-width: 1488px;
    `,
    breadCrumArea: {
      inner: css`
        width: 100%;
        padding: 0 24px;
        max-width: 1488px;
      `,
    },
    main: css`
      width: 100%;
    `,
  }
}
