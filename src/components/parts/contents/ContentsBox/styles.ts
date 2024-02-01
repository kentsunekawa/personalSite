'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'
import { createFlexBoxStyle, createFontStyles } from '@/styles/mixin'

export const createStyles = () => {
  return {
    container: css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    `,
    definitionTableStyles: {
      row: css`
        ${createFlexBoxStyle({
          gap: [1],
        })}
      `,
      dt: css`
        width: 114px;
      `,
      dtText: css`
        ${createFontStyles({
          size: 14,
          lineHeight: 3.5,
        })}
      `,
      dd: css`
        width: calc(100% - 122px);
      `,
    },
    border: css`
      width: 100%;
      height: 1px;
      background-color: var(${VAR_NAMES.grayScale[20]});
    `,
  }
}
