"use client"
// import from libraries
import { useMemo } from "react"

// import from this project
import { useCommonData } from "./useCommonData"

export const useProfile = () => {
  const { commonData } = useCommonData()

  const profile = useMemo(() => commonData?.profile ?? null, [commonData])

  return {
    profile,
  }
}
