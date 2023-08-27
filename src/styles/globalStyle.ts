import { css } from "styled-components"
import { destyle } from "@/styles/destyle"
import { githubMarkdown } from "./githubMarkdown"

export const globalStyle = css`
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
  ${githubMarkdown}
`
