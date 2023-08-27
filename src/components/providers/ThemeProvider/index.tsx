"use client"
import { ThemeProvider as Provider } from "styled-components"

import { theme } from "@/styles/theme"

type Props = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => (
  <Provider theme={theme}>{children}</Provider>
)
