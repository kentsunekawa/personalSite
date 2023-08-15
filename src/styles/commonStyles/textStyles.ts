// import from libraries
import { css } from "styled-components"

// import from this project
import { StyleBaseData } from "@/hooks"

export type HeadingSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
export type Size = "small" | "medium" | "large"
export type Weight = 100 | 400 | 500
export type Align = "center" | "right" | "left"

export const createStyles = () => {
  return {
    align: {
      center: css`
        text-align: center;
      `,
      right: css`
        text-align: right;
      `,
      left: css`
        text-align: left;
      `,
    },
    weight: {
      100: css`
        font-weight: 100;
      `,
      400: css`
        font-weight: 400;
      `,
      500: css`
        font-weight: 500;
      `,
    },
    heading: {
      h1: css`
        font-size: 28px;
        line-height: 1.4em;
        letter-spacing: -0.026em;
      `,
      h2: css`
        font-size: 26px;
        line-height: 1.4em;
        letter-spacing: -0.02em;
      `,
      h3: css`
        font-size: 24px;
        line-height: 1.4em;
        letter-spacing: -0.02em;
      `,
      h4: css`
        font-size: 22px;
        line-height: 1.4em;
        letter-spacing: -0.024em;
      `,
      h5: css`
        font-size: 20px;
        line-height: 1.4em;
        letter-spacing: 0;
      `,
      h6: css`
        font-size: 18px;
        line-height: 1.4em;
        letter-spacing: -0.017em;
      `,
    },
    text: {
      small: css`
        font-size: 12px;
        line-height: 1.6em;
        letter-spacing: 0;
      `,
      medium: css`
        font-size: 14px;
        line-height: 1.6em;
        letter-spacing: 0;
      `,
      large: css`
        font-size: 16px;
        line-height: 1.6em;
        letter-spacing: 0;
      `,
    },
    subTitle: {
      small: css`
        font-size: 18px;
        line-height: 1.6em;
        letter-spacing: 0;
      `,
      medium: css`
        font-size: 20px;
        line-height: 1.6em;
        letter-spacing: 0;
      `,
      large: css`
        font-size: 22px;
        line-height: 1.6em;
        letter-spacing: 0;
      `,
    },
    caption: css`
      font-size: 12px;
      line-height: 1.6em;
      letter-spacing: -0.03em;
    `,
    overline: css`
      font-size: 10px;
      line-height: 1.6em;
      letter-spacing: -0.025em;
    `,
    buttonLabel: {
      small: css`
        font-size: 14px;
        line-height: 1.6em;
        letter-spacing: -0.028em;
      `,
      medium: css`
        font-size: 16px;
        line-height: 1.6em;
        letter-spacing: 0;
      `,
      large: css`
        font-size: 18px;
        line-height: 1.6em;
        letter-spacing: 0;
      `,
    },
  }
}
