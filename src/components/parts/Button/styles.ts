"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"
import { ColorName } from "@/styles/theme"
import {
  createStyles as createTextStyle,
  Size,
} from "@/styles/commonStyles/textStyles"
import { hoveredLink } from "@/styles/mixin"

export type StyleProps = {
  type?: "filled" | "border" | "text" | "block"
  size?: Size
  color?: ColorName
}

const textStyle = createTextStyle()

export const createStyles = (styleProps?: StyleProps) => {
  const size = styleProps?.size ?? "m"
  const type = styleProps?.type ?? "text"
  const hasPadding = type !== "text"

  const color = styleProps?.color ?? "fg"
  const colorVarName = color === "fg" ? VAR_NAMES.fg : VAR_NAMES[color].main

  return {
    container: css`
      display: inline-block;
      color: var(${colorVarName});
      ${textStyle.text[size]}
      line-height: 1.2em;
      ${type === "border" &&
      css`
        border: 1px solid var(${colorVarName});
      `}
      ${type === "filled" &&
      css`
        background: var(${colorVarName});
        color: #fff;
      `}
      ${hasPadding &&
      css`
        padding: 8px;
        border-radius: 4px;
      `}
        
      ${hoveredLink()}
    `,
  }
}
