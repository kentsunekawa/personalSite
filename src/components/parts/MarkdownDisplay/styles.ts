// import from libraries
import { css } from "styled-components"

// import from this project

export const createStyles = () => {
  return {
    container: css`
      .markdown-body {
        font-size: 14px;
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
        a {
        }
      }
    `,
  }
}
