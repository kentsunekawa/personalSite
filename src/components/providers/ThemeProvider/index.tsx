"use client"
import { ThemeProvider as NextThemeProvider } from "next-themes"

type Props = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => (
  <NextThemeProvider>{children}</NextThemeProvider>
)
