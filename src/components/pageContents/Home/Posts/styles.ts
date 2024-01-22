'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'
import { hoveredLink, limitTextRow } from '@/styles/mixin'

export const createStyles = () => {
  return {
    container: css`
      display: flex;
      flex-wrap: wrap;
      gap: 24px 0;
    `,
    row: css`
      width: 100%;
    `,
    list: css`
      display: flex;
      flex-wrap: wrap;
      gap: 16px 0;
    `,
    item: css`
      width: 100%;
    `,
    box: css`
      display: flex;
      align-items: center;
      ${hoveredLink()}
      gap: 0 8px;
    `,
    title: css`
      width: calc(100% - 64px);
      ${limitTextRow(1)}
    `,
    date: css`
      width: 56px;
    `,
  }
}
