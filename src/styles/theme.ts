import { DefaultTheme } from "styled-components"

export const theme: DefaultTheme = {
  colors: {
    primary: {
      right: "#59cfdc",
      main: "#2b96a1",
      dark: "#215e60",
    },
    secondary: "#0070f3",
  },
}

export type Theme = typeof theme
