'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'

export const createStyles = () => {
  return {
    divider: css`
      height: 1px;
      background-color: var(${VAR_NAMES.grayScale[20]});
    `,
  }
}
