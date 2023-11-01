import { useContext } from "react"

import {
  PageStateContext,
  SetPageStateContext,
} from "@/components/providers/PageStateProvider"

export const usePageState = () => {
  const pageState = useContext(PageStateContext)

  if (typeof pageState === "undefined") {
    throw new Error(
      "usePageState should be used within the PageStateContext provider!"
    )
  }

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
