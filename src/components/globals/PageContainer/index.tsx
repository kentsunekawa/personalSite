"use client"
// import from libraries
import { useLayoutEffect } from "react"

// import from this project
import { PageState, CommonData } from "@/types"
import { IsTranslated } from "@/components/globals/IsTranslated"
import { useSetPageState } from "@/hooks/usePageState"
import { useSetCommonData } from "@/hooks/useCommonData"

export type Props = PageState & {
  children: React.ReactNode
  commonData: CommonData
}

export const PageContainer: React.FC<Props> = ({
  children,
  commonData,
  ...pageState
}) => {
  const { setPageState } = useSetPageState()
  const { setCommonData } = useSetCommonData()

  useLayoutEffect(() => {
    setPageState(pageState)
    setCommonData(commonData)
  }, [pageState, commonData, setPageState, setCommonData])

  return <IsTranslated {...pageState}>{children}</IsTranslated>
}
