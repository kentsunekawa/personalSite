'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { mq } from '@/styles/mixin'

export const createStyles = () => {
  return {
    container: css`
      @page {
        size: a4 portrait;
        margin: 1.5cm;
      }
    `,
    main: css`
      padding-bottom: 72px;
      /* ${mq(
        'screen',
        css`
          padding: 24px;
        `,
      )} */
    `,
    mainInner: css`
      width: 100%;
      /* ${mq(
        'screen',
        css`
          max-width: 980px;
        `,
      )} */
    `,
  }
}
