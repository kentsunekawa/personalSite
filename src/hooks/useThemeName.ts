import { useCallback, useMemo } from "react"
import { useTheme } from "next-themes"

export const THEME_NAMES = {
  light: "light",
  dark: "dark",
  system: "system",
} as const

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

  return {
    setThemeName,
    themeName,
  }
}
