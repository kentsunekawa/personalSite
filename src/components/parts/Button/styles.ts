"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"

export type StyleProps = {
  type?: "filled" | "border" | "text"
  size?: "m" | "l"
}

export const createStyles = (styleProps?: StyleProps) => {
  return {
    container: css``,
  }
}
