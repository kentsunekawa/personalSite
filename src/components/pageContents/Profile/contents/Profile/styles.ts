'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'
import { createFontStyles } from '@/styles/mixin'

export const createStyles = () => {
  return {
    container: css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 40px 0;
    `,
    row: css`
      width: 100%;
    `,
    upper: {
      container: css`
        width: 100%;
        display: flex;
        gap: 0 48px;
      `,
      main: css`
        display: flex;
        flex-wrap: wrap;
        width: calc(100% - 328px);
        flex-direction: column;
        justify-content: space-between;
      `,
      image: css`
        width: 280px;
        border-radius: 4px;
        height: auto;
      `,
    },
    image: css`
      width: 100%;
      height: auto;
      border-radius: 4px;
    `,
    titleArea: css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 8px 0;
    `,
    nameArea: css`
      width: 100%;
      display: flex;
      gap: 0 16px;
      align-items: flex-end;
    `,
    metaArea: css`
      width: 100%;
    `,
    dlStyles: {
      container: css`
        gap: 8px 0;
      `,
      row: css`
        align-items: center;
        gap: 0 16px;
      `,
      dt: css`
        width: 72px;
      `,
      dtText: css`
        ${createFontStyles({
          size: 12,
          weight: 'm',
          lineHeight: 2,
        })}
      `,
      dd: css`
        display: flex;
        width: calc(100% - 88px);
      `,
    },
  }
}
