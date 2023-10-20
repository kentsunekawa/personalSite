import { useMemo } from "react"

export const useStyle = <T, U>(
  createStyles: (args?: T) => U,
  args?: T
): {
  styles: U
} => ({
  styles: useMemo(() => createStyles(args), [args, createStyles]),
})
