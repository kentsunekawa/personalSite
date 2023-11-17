import { useCallback, useMemo } from "react"
import { useTheme } from "next-themes"

import { THEME_NAMES } from "@/constants"

export type RowThemeName = (typeof THEME_NAMES)[keyof typeof THEME_NAMES]

export type ThemeName = Exclude<RowThemeName, "system">

export const castTheme = (theme?: string): RowThemeName => {
  if (theme === "light" || theme === "dark") return theme

  return "system"
}

export const useThemeName = () => {
  const { theme: nextTheme, setTheme: setNextTheem } = useTheme()

  const setThemeName = useCallback(
    (newTheme: RowThemeName) => setNextTheem(newTheme),
    [setNextTheem]
  )

  const themeName = useMemo(() => castTheme(nextTheme), [nextTheme])

  const theme = useMemo(() => {
    if (themeName === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    }

    return themeName
  }, [themeName])

  return {
    theme,
    themeName,
    setThemeName,
  }
}
