import { css } from "styled-components"
import { destyle } from "@/styles/destyle"
import { githubMarkdown } from "./githubMarkdown"

export const globalStyle = css`
  ${destyle}
  html,
  body {
    /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
    font-size: 14px;
  }
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
    color: #444;
    word-break: break-all;
  }
  img {
    display: block;
    width: 100%;
  }
  ${githubMarkdown}
`
