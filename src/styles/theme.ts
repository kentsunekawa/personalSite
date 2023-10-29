import { DefaultTheme } from "styled-components"

import { ThemeName } from "@/hooks/useThemeName"

const names = {
  bg: "--bg",
}

type ColorScale = {
  right: string
  main: string
  dark: string
}

export type Theme = {
  colors: {
    color: string
    bg: string
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
    bg: "#333",
    testColor: "#00f",
  },
}

export const lightTheme: Theme = {
  colors: {
    ...commonTheme,
    bg: "#fff",
    testColor: "#f0f",
  },
}

export const themes: {
  [k in ThemeName]: Theme
} = {
  light: lightTheme,
  dark: darkTheme,
}
