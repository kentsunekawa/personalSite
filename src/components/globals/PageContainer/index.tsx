"use client"
// import from libraries
import { useLayoutEffect } from "react"

// import from this project
import { PageState } from "@/types"
import { IsTranslated } from "@/components/globals/IsTranslated"
import { useSetPageState } from "@/hooks/usePageState"

export type Props = PageState & {
  children: React.ReactNode
}

export const PageContainer: React.FC<Props> = ({ children, ...pageState }) => {
  const { setPageState } = useSetPageState()

  useLayoutEffect(() => {
    setPageState(pageState)
  }, [pageState, setPageState])

  return <IsTranslated {...pageState}>{children}</IsTranslated>
}
