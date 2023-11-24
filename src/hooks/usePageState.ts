import { useContext } from "react"

import {
  PageStateContext,
  SetPageStateContext,
} from "@/components/providers/PageStateProvider"

export const usePageState = () => {
  const pageState = useContext(PageStateContext)

  return { pageState }
}

export const useSetPageState = () => {
  const setPageState = useContext(SetPageStateContext)

  if (typeof setPageState === "undefined") {
    throw new Error(
      "useSetPageState should be used within the PageStateContext provider!"
    )
  }

  return {
    setPageState,
  }
}
