import { useContext } from "react"

import {
  CommonDataContext,
  SetCommonDataContext,
} from "@/components/providers/CommonDataProvider"

export const useCommonData = () => {
  const commonData = useContext(CommonDataContext)

  return { commonData }
}

export const useSetCommonData = () => {
  const setCommonData = useContext(SetCommonDataContext)

  if (typeof setCommonData === "undefined") {
    throw new Error(
      "useSetCommonData should be used within the CommonDataContext provider!"
    )
  }

  return {
    setCommonData,
  }
}
