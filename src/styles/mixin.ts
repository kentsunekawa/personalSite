// import from libraries
import { css, RuleSet } from "styled-components"

import { Css } from "@/types"

export const BREAK_POINTS = {
  sp: 375,
  spMax: 767,
  tbMin: 768,
  tbMax: 959,
  pcMin: 960,
  pcMidium: 1440,
} as const

export type Mq = "spMax_lt" | "tbMin_gt" | "tbMax_lt" | "pcMin_gt"

export const mediaQueries = {
  // ~ 767
  spMax_lt: `(max-width: ${BREAK_POINTS.spMax}px)`,
  // 768 ~
  tbMin_gt: `(min-width: ${BREAK_POINTS.tbMin}px)`,
  // ~ 959
  tbMax_lt: `(max-width: ${BREAK_POINTS.tbMax}px)`,
  // 960 ~
  pcMin_gt: `(min-width: ${BREAK_POINTS.pcMin}px)`,
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

export const fonts = () => ({
  en: css`
    font-family: "Inter", sans-serif !important;
  `,
})
