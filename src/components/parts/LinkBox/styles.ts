"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { hoveredLink } from "@/styles/mixin"

export const createStyles = () => {
  return {
    container: css`
      ${hoveredLink()}
    `,
  }
}
