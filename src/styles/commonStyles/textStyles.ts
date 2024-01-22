'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { fontWeights } from '@/styles/mixin'

export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type Size = 's' | 'm' | 'l'
export type Weight = 'm' | 'r' | 'b'
export type Align = 'center' | 'right' | 'left'

export const createStyles = (args?: { lineHeight?: number }) => {
  return {
    base: css`
      line-height: ${args?.lineHeight ? `${args?.lineHeight * 8}px` : '1.6em'};
    `,
    align: {
      center: css`
        text-align: center;
      `,
      right: css`
        text-align: right;
      `,
      left: css`
        text-align: left;
      `,
    },
    weight: fontWeights,
    heading: {
      h1: css`
        font-size: 36px;
        letter-spacing: -0.026em;
      `,
      h2: css`
        font-size: 32px;
        letter-spacing: -0.02em;
      `,
      h3: css`
        font-size: 28px;
        letter-spacing: -0.02em;
      `,
      h4: css`
        font-size: 24px;
        letter-spacing: -0.024em;
      `,
      h5: css`
        font-size: 20px;
        letter-spacing: 0;
      `,
      h6: css`
        font-size: 18px;
        letter-spacing: -0.017em;
      `,
    },
    text: {
      s: css`
        font-size: 12px;
        letter-spacing: 0;
      `,
      m: css`
        font-size: 14px;
        letter-spacing: 0;
      `,
      l: css`
        font-size: 16px;
        letter-spacing: 0;
      `,
    },

    caption: css`
      font-size: 10px;
      letter-spacing: -0.03em;
    `,
  }
}
