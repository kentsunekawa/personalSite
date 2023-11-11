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
  }
  [data-theme="dark"] {
    /* colors */
    --fg: #fff;
    --bg: ${dColors.bg};
    --primary-light: ${dColors.primary.right};
    --primary-main: ${dColors.primary.main};
    --primary-dark: ${dColors.primary.dark};
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
