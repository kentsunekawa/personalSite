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
  color?: ColorName | 'gray'
  weight?: Weight
  lineHeight?: number
}

const textStyle = createTextStyle()

export const createStyles = (styleProps?: StyleProps) => {
  const size = styleProps?.size ?? 'm'
  const type = styleProps?.type ?? 'text'
  const weight = styleProps?.weight ?? 'm'
  const hasPadding = type !== 'text'
  const color = styleProps?.color ?? 'fg'
  const isNega = color !== 'gray'
  const colorVarName = (() => {
    if (color === 'fg') return VAR_NAMES.fg
    if (color === 'gray') return VAR_NAMES.grayScale[20]

    return VAR_NAMES[color].main
  })()
  const lineHeight = styleProps?.lineHeight
    ? `${styleProps.lineHeight * 8}px`
    : undefined

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
      line-height: ${lineHeight};
      ${type === 'border' &&
      css`
        border: 1px solid var(${colorVarName});
      `}
      ${type === 'filled' &&
      css`
        background: var(${colorVarName});
        color: var(${isNega ? VAR_NAMES.bg : VAR_NAMES.fg});
      `}
      border-radius: 4px;
      ${containerStyle[size]}
      ${fontWeights[weight]}
      ${hoveredLink()}
    `,
  }
}
