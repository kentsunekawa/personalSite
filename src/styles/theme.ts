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
  grayScale: {
    0: "--gray-scale-0",
    10: "--gray-scale-10",
    20: "--gray-scale-20",
    30: "--gray-scale-30",
    40: "--gray-scale-40",
    50: "--gray-scale-50",
    60: "--gray-scale-60",
    70: "--gray-scale-70",
    80: "--gray-scale-80",
    90: "--gray-scale-90",
    95: "--gray-scale-95",
    99: "--gray-scale-99",
    100: "--gray-scale-100",
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
    grayScale: {
      0: string
      10: string
      20: string
      30: string
      40: string
      50: string
      60: string
      70: string
      80: string
      90: string
      95: string
      99: string
      100: string
    }
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
    grayScale: {
      0: "#000000",
      10: "#191C1D",
      20: "#2D3132",
      30: "#444748",
      40: "#5C5F60",
      50: "#5C5F60",
      60: "#8E9192",
      70: "#A9ACAC",
      80: "#C4C7C7",
      90: "#E0E3E3",
      95: "#EFF1F1",
      99: "#FBFDFD",
      100: "#FFFFFF",
    },
  },
}

export const darkTheme: Theme = {
  colors: {
    ...commonTheme,
    fg: "#fff",
    bg: "#0d1117",
    grayScale: {
      0: "#FFFFFF",
      10: "#E0E3E3",
      20: "#C4C7C7",
      30: "#A9ACAC",
      40: "#8E9192",
      50: "#5C5F60",
      60: "#5C5F60",
      70: "#444748",
      80: "#2D3132",
      90: "#191C1D",
      95: "#191C1D",
      99: "#191C1D",
      100: "#000000",
    },
  },
}

export const themes: {
  [k in ThemeName]: Theme
} = {
  light: lightTheme,
  dark: darkTheme,
}
