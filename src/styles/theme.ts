import { DefaultTheme } from "styled-components"

import { ThemeName } from "@/hooks/useThemeName"

export const VAR_NAMES = {
  fg: "--fg",
  bg: "--bg",
  primary: {
    light: "--primary-light",
    main: "--primary-main",
    dark: "--primary-dark",
  },
  secondary: {
    light: "--secondary-light",
    main: "--secondary-main",
    dark: "--secondary-dark",
  },
} as const

export type ColorName = "primary" | "secondary"

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
  } & {
    [k in ColorName]: ColorScale
  }
}

export type Mode = "light" | "dark" | "system"

const commonTheme = {
  primary: {
    right: "#59cfdc",
    main: "#2b96a1",
    dark: "#215e60",
  },
  secondary: {
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
  },
}

export const darkTheme: Theme = {
  colors: {
    ...commonTheme,
    fg: "#fff",
    bg: "#0d1117",
  },
}

export const themes: {
  [k in ThemeName]: Theme
} = {
  light: lightTheme,
  dark: darkTheme,
}
