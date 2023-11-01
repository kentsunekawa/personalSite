"use client"
// import from libraries
import { useLayoutEffect } from "react"

// import from this project
import { PageState } from "@/types"
import { useSetPageState } from "@/hooks/usePageState"

export type Props = PageState & {
  children: React.ReactNode
}

export const PageContainer: React.FC<Props> = ({
  children,
  lang,
  pageName,
}) => {
  const { setPageState } = useSetPageState()

  useLayoutEffect(() => {
    setPageState({ lang, pageName })
  }, [lang, pageName, setPageState])

  return <>{children}</>
}
