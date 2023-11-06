import { DefaultTheme } from "styled-components"

import { ThemeName } from "@/hooks/useThemeName"

export const VAR_NAMES = {
  fg: "--fb",
  bg: "--bg",
  primary: {
    light: "--primary-light",
    main: "--primary-main",
    dark: "--primary-dark",
  },
} as const

type ColorScale = {
  right: string
  main: string
  dark: string
}

export type Theme = {
  colors: {
    fg: string
    bg: string
    primary: ColorScale
    test: {
      color: string
    }
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

export const lightTheme: Theme = {
  colors: {
    ...commonTheme,
    fg: "#222",
    bg: "#fff",
    test: {
      color: "#f0f",
    },
  },
}

export const darkTheme: Theme = {
  colors: {
    ...commonTheme,
    fg: "#fff",
    bg: "#0d1117",
    test: {
      color: "#00f",
    },
  },
}

export const themes: {
  [k in ThemeName]: Theme
} = {
  light: lightTheme,
  dark: darkTheme,
}
