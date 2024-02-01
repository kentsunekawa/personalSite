// import from libraries
import { css, RuleSet } from 'styled-components'

import { Css } from '@/types'
import type { Weight } from '@/styles/commonStyles/textStyles'

export const BREAK_POINTS = {
  sp: 375,
  spMax: 767,
  tbMin: 768,
  tbMax: 959,
  pcMin: 960,
  pcMidium: 1440,
} as const

export type Mq =
  | 'spMax_lt'
  | 'tbMin_gt'
  | 'tbMax_lt'
  | 'pcMin_gt'
  | 'print'
  | 'screen'

export const mediaQueries = {
  // ~ 767
  spMax_lt: `(max-width: ${BREAK_POINTS.spMax}px)`,
  // 768 ~
  tbMin_gt: `(min-width: ${BREAK_POINTS.tbMin}px)`,
  // ~ 959
  tbMax_lt: `(max-width: ${BREAK_POINTS.tbMax}px)`,
  // 960 ~
  pcMin_gt: `(min-width: ${BREAK_POINTS.pcMin}px)`,
  // print
  print: 'print',
  // screen
  screen: 'screen',
}

export const mq = (query: Mq, style: Css) => css`
  @media ${mediaQueries[query]} {
    ${style}
  }
`

export const hoveredLink = () => css`
  transition: opacity 0.06s linear;
  &:hover {
    opacity: 0.7;
  }
`

export const adjustWidth = (num: number, gap: number) => {
  const width = `${100 / num}%`
  const distance = `${(gap * (num - 1)) / num}px`

  return css`
    width: ${`calc(${width} - ${distance})`};
  `
}

// テキストの行の制限
export const limitTextRow = (limit = 1) => css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${limit};
  -webkit-box-orient: vertical;
`

export const fontWeights = {
  r: css`
    font-weight: 400;
  `,
  m: css`
    font-weight: 500;
  `,
  b: css`
    font-weight: 700;
  `,
}

export const createFontStyles = (props: {
  size?: number
  weight?: Weight
  lineHeight?: number
  letterSpacing?: number
}) => css`
  font-size: ${props.size ? `${props.size}px` : undefined};
  ${props.weight && fontWeights[props.weight]};
  line-height: ${props.lineHeight ? `${props.lineHeight * 8}px` : undefined};
  letter-spacing: ${props.letterSpacing
    ? `${props.letterSpacing}em `
    : undefined};
`

export type FlexBoxStyleArgs = {
  justifyContent?: 'center' | 'flex-start' | 'flex-end'
  alignItems?: 'center'
  alignContent?: 'center'
  gap?: number | string | (number | string)[]
}
export const createFlexBoxStyle = (args?: FlexBoxStyleArgs) => {
  const gap = (() => {
    if (args?.gap) {
      if (Array.isArray(args.gap)) {
        return args.gap.reduce(
          (sum, g) => (typeof g === 'string' ? `${g} ` : `${sum}${g * 8}px `),
          '',
        )
      }
      return typeof args.gap === 'string' ? args.gap : `${args.gap * 8}px`
    }
    return undefined
  })()

  return css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: ${args?.justifyContent};
    align-items: ${args?.alignItems};
    align-content: ${args?.alignContent};
    gap: ${gap};
  `
}
