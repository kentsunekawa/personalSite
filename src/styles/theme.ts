import { DefaultTheme } from "styled-components"

import { ThemeName } from "@/hooks/useThemeName"

type ColorScale = {
  right: string
  main: string
  dark: string
}

export type Theme = {
  colors: {
    color: string
    background: string
    primary: ColorScale
    testColor: string
  }
}

export type Mode = "light" | "dark" | "system"

const commonTheme = {
  color: "#555",
  primary: {
    right: "#59cfdc",
    main: "#2b96a1",
    dark: "#215e60",
  },
}

export const darkTheme: Theme = {
  colors: {
    ...commonTheme,
    background: "#333",
    testColor: "#00f",
  },
}

export const lightTheme: Theme = {
  colors: {
    ...commonTheme,
    background: "#fff",
    testColor: "#f0f",
  },
}

export const themes: {
  [k in ThemeName]: Theme
} = {
  light: lightTheme,
  dark: darkTheme,
}
