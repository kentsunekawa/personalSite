'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'
import { ColorName } from '@/styles/theme'
import {
  createStyles as createTextStyle,
  Size,
  Weight,
} from '@/styles/commonStyles/textStyles'
import { hoveredLink, fontWeights } from '@/styles/mixin'

export type StyleProps = {
  type?: 'filled' | 'border' | 'text' | 'block'
  size?: Size
  color?: ColorName
  weight?: Weight
}

const textStyle = createTextStyle()

export const createStyles = (styleProps?: StyleProps) => {
  const size = styleProps?.size ?? 'm'
  const type = styleProps?.type ?? 'text'
  const weight = styleProps?.weight ?? 'm'
  const hasPadding = type !== 'text'
  const color = styleProps?.color ?? 'fg'
  const colorVarName = color === 'fg' ? VAR_NAMES.fg : VAR_NAMES[color].main

  const containerStyle = {
    s: css`
      ${textStyle.text.s}
      line-height: 16px;
      ${hasPadding &&
      css`
        padding: 4px 8px;
      `}
    `,
    m: css`
      ${textStyle.text.m}
      line-height: 16px;
      ${hasPadding &&
      css`
        padding: 4px 8px;
      `}
    `,
    l: css`
      ${textStyle.text.l}
      line-height: 24px;
      ${hasPadding &&
      css`
        padding: 16px 50px;
      `}
    `,
  }

  return {
    container: css`
      display: inline-block;
      color: var(${colorVarName});
      ${type === 'border' &&
      css`
        border: 1px solid var(${colorVarName});
      `}
      ${type === 'filled' &&
      css`
        background: var(${colorVarName});
        color: var(${VAR_NAMES.bg});
      `}
      border-radius: 4px;
      ${containerStyle[size]}
      ${fontWeights[weight]}
      ${hoveredLink()}
    `,
  }
}
