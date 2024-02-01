'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'
import { mq, createFontStyles } from '@/styles/mixin'

export const createStyles = () => {
  const headerHeight = '64px'
  return {
    container: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: ${headerHeight};
      padding: 0 16px 0 24px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      ${mq(
        'print',
        css`
          display: none;
        `,
      )}
    `,
    space: css`
      width: 100%;
      padding-top: ${headerHeight};
    `,
    bg: css`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: var(${VAR_NAMES.bg});
      opacity: 0.85;
      z-index: -1;
    `,
    siteNameText: createFontStyles({
      size: 15,
      letterSpacing: -0.02,
    }),
    menuArea: css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      gap: 0 16px;
    `,
    subMenu: css`
      display: flex;
      align-items: center;
      gap: 0 8px;
      width: auto;
    `,
    spacer: css`
      display: block;
      width: 2px;
      height: 8px;
      background: var(${VAR_NAMES.fg});
    `,
  }
}
