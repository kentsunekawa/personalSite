"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { ThemeName } from "@/hooks"
import { githubMarkdown } from "@/styles/githubMarkdown"

export const createStyles = (args?: { theme: ThemeName }) => {
  return {
    container: css`
      ${githubMarkdown[args?.theme ?? "light"]}
      .markdown-body {
        font-size: 14px;
        p {
          line-height: 1.6em !important;
        }
        ul,
        ol {
          list-style-type: circle;
        }
        ul ul {
          list-style-type: circle;
        }
        ul {
          list-style-type: disc;
        }
      }
    `,
  }
}
