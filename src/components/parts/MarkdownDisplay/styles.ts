'use client'
// import from libraries
import { css } from 'styled-components'

// import from this project
import { VAR_NAMES } from '@/styles/theme'
import { ThemeName } from '@/hooks'
import { githubMarkdown } from '@/styles/githubMarkdown'

export const createStyles = (args?: { theme: ThemeName }) => {
  return {
    container: css`
      ${githubMarkdown[args?.theme ?? 'light']}
      .markdown-body {
        background: var(${VAR_NAMES.bg});
        font-size: 16px;
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
