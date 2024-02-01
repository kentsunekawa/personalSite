'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'

export const createStyles = () => {
  return {
    container: css`
      position: relative;
      display: block;
      padding: 64px;
      border-radius: 60px;
      .shadow {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        border-radius: 60px;
        width: 100%;
        height: 100%;
        background: var(${VAR_NAMES.bg});
        opacity: 0.1;
        filter: drop-shadow(0px 0px 0px var(${VAR_NAMES.grayScale[0]}));
        transition: opacity 0.2s, filter 0.2s;
      }
      &:hover {
        .shadow {
          filter: drop-shadow(10px 10px 18px var(${VAR_NAMES.grayScale[0]}));
        }
      }
    `,
    contents: css`
      position: relative;
      z-index: 2;
      width: 100%;
    `,
    bg: css`
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      background: var(${VAR_NAMES.bg});
      border-radius: 60px;
      width: 100%;
      height: 100%;
    `,
  }
}
