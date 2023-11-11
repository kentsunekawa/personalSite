"use client"
// import from libraries
import { css } from "styled-components"

// import from this project
import { VAR_NAMES } from "@/styles/theme"
import { fonts } from "@/styles/mixin"

export const createStyles = () => {
  return {
    container: css``,
    slogan: css`
      ${fonts().inter}
    `,
  }
}
