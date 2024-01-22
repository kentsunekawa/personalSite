'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'

export const createStyles = () => {
  return {
    container: css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    `,
    titleArea: css`
      width: 40%;
    `,
    main: css`
      width: 40%;
    `,
  }
}
