import { css } from "styled-components"
import { destyle } from "@/styles/destyle"
import { themes } from "./theme"
import { githubMarkdown } from "./githubMarkdown"

const { light, dark } = themes

export const globalStyle = css`
  :root {
    --fg: #000;
    --bg: ${light.colors.background};
    --test-color: #0f0;
  }
  [data-theme="dark"] {
    --fg: #fff;
    --bg: ${dark.colors.background};
    --test-color: #f00;
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
