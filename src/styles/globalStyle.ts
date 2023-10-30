import { css } from "styled-components"
import { destyle } from "@/styles/destyle"
import { themes, VAR_NAMES } from "./theme"
import { githubMarkdown } from "./githubMarkdown"

const {
  light: { colors: lColors },
  dark: { colors: dColors },
} = themes

export const globalStyle = css`
  :root {
    /* colors */
    --fg: #000;
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
  ${githubMarkdown}
`
