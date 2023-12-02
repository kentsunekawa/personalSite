import { css } from "styled-components"
import { destyle } from "@/styles/destyle"
import { themes } from "./theme"

const {
  light: { colors: lColors },
  dark: { colors: dColors },
} = themes

export const globalStyle = css`
  :root {
    /* colors */
    --fg: ${lColors.fg};
    --bg: ${lColors.bg};
    --primary-light: ${lColors.primary.right};
    --primary-main: ${lColors.primary.main};
    --primary-dark: ${lColors.primary.dark};
    --gray-scale-0: ${lColors.grayScale[0]};
    --gray-scale-10: ${lColors.grayScale[10]};
    --gray-scale-20: ${lColors.grayScale[20]};
    --gray-scale-30: ${lColors.grayScale[30]};
    --gray-scale-40: ${lColors.grayScale[40]};
    --gray-scale-50: ${lColors.grayScale[50]};
    --gray-scale-60: ${lColors.grayScale[60]};
    --gray-scale-70: ${lColors.grayScale[70]};
    --gray-scale-80: ${lColors.grayScale[80]};
    --gray-scale-90: ${lColors.grayScale[90]};
    --gray-scale-95: ${lColors.grayScale[95]};
    --gray-scale-99: ${lColors.grayScale[99]};
    --gray-scale-100: ${lColors.grayScale[100]};
  }
  [data-theme="dark"] {
    /* colors */
    --fg: ${dColors.fg};
    --bg: ${dColors.bg};
    --primary-light: ${dColors.primary.right};
    --primary-main: ${dColors.primary.main};
    --primary-dark: ${dColors.primary.dark};
    --gray-scale-0: ${dColors.grayScale[0]};
    --gray-scale-10: ${dColors.grayScale[10]};
    --gray-scale-20: ${dColors.grayScale[20]};
    --gray-scale-30: ${dColors.grayScale[30]};
    --gray-scale-40: ${dColors.grayScale[40]};
    --gray-scale-50: ${dColors.grayScale[50]};
    --gray-scale-60: ${dColors.grayScale[60]};
    --gray-scale-70: ${dColors.grayScale[70]};
    --gray-scale-80: ${dColors.grayScale[80]};
    --gray-scale-90: ${dColors.grayScale[90]};
    --gray-scale-95: ${dColors.grayScale[95]};
    --gray-scale-99: ${dColors.grayScale[99]};
    --gray-scale-100: ${dColors.grayScale[100]};
  }
  ${destyle}
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  section,
  li,
  button,
  a {
    word-break: break-all;
  }
  img {
    display: block;
    width: 100%;
  }
  html {
    background: var(--bg);
  }
  * {
    color: var(--fg);
  }
`
