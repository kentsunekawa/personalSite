'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'

export const createStyles = () => {
  return {
    container: css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      gap: 72px 0;
      padding-top: 72px;
    `,
    breadCrumArea: {
      container: css`
        width: 100%;
        display: flex;
        justify-content: center;
      `,
      inner: css`
        width: 100%;
        padding: 0 24px;
        max-width: 1488px;
      `,
    },
    // headerArea: {
    //   container: css`
    //     display: flex;
    //     flex-wrap: wrap;
    //     width: 100%;
    //     gap: 24px 0;
    //   `,
    //   row: css`
    //     width: 100%;
    //   `,
    // },
    main: css`
      width: 100%;
    `,
  }
}
