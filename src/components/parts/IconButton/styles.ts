'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'
import { ColorName } from '@/styles/theme'
import { hoveredLink } from '@/styles/mixin'

export type StyleProps = {
  type?: 'filled' | 'border' | 'block'
  size?: 'xs' | 's' | 'm' | 'l'
  color?: ColorName
}

export const createStyles = (styleProps?: StyleProps) => {
  const size = styleProps?.size ?? 'm'
  const type = styleProps?.type ?? 'block'
  const color = styleProps?.color ?? 'fg'
  const colorVarName = color === 'fg' ? VAR_NAMES.fg : VAR_NAMES[color].main

  const containerStyle = {
    xs: css`
      width: 16px;
      height: 16px;
    `,
    s: css`
      width: 20px;
      height: 20px;
    `,
    m: css`
      width: 32px;
      height: 32px;
    `,
    l: css`
      width: 40px;
      height: 40px;
    `,
  }

  return {
    container: css`
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(${colorVarName});
      ${containerStyle[size]}
      ${type === 'border' &&
      css`
        border: 1px solid var(${colorVarName});
      `}
      ${type === 'filled' &&
      css`
        background: var(${colorVarName});
        color: var(${VAR_NAMES.bg});
      `}
      border-radius: 50%;
      ${hoveredLink()}
    `,
  }
}
