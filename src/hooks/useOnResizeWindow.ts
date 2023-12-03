import { useRef, useEffect } from "react"

export const useOnResizeWindow = (onResize: () => void) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      onResize()
      window.addEventListener("resize", onResize)

      return () => window.removeEventListener("resize", onResize)
    }
  }, [onResize])
}
