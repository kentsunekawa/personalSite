'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { mq, createFontStyles } from '@/styles/mixin'

export const createStyles = () => {
  return {
    container: css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 64px 0;
    `,
    titleArea: {
      text: css`
        ${createFontStyles({
          size: 56,
          lineHeight: 7,
          letterSpacing: -0.02,
        })};
      `,
      container: css`
        width: 100%;

        ${mq(
          'tbMin_gt',
          css`
            width: 40%;
          `,
        )};
      `,
      inner: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        max-height: 800px;
      `,
    },
    main: css`
      width: 100%;
      ${mq(
        'tbMin_gt',
        css`
          width: 60%;
          padding-right: 40px;
        `,
      )};
    `,
    inner: css`
      width: 100%;
      max-width: 800px;
    `,
  }
}
