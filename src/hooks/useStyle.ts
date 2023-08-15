import { useMemo } from "react"

import { theme, Theme } from "styles/theme"

export type StyleBaseData = {
  theme: Theme
}

export const useStyle = <T, U>(
  createStyles: (styleBaseData: StyleBaseData, args?: T) => U,
  args?: T
): {
  theme: Theme
  styles: U
} => ({
  theme,
  styles: useMemo(() => createStyles({ theme }, args), [args, createStyles]),
})
