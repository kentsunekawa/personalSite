"use client"
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes"
import { ThemeProvider as Provider } from "styled-components"

import { useThemeName } from "@/hooks/useThemeName"
import { themes } from "@/styles/theme"

type Props = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => (
  <NextThemeProvider>{children}</NextThemeProvider>
)
