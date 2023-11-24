"use client"
// import from libraries
import { useMemo } from "react"
import dynamic from "next/dynamic"

// import from this project
import { BREAK_POINTS, Mq } from "@/styles/mixin"

export type Props = {
  mq: Mq
  children: React.ReactNode
}

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
})

export const MQ: React.FC<Props> = ({ mq, children }) => {
  const props = useMemo(() => {
    switch (mq) {
      case "spMax_lt":
        return {
          maxWidth: BREAK_POINTS.spMax,
        }
      case "tbMin_gt":
        return {
          minWidth: BREAK_POINTS.tbMin,
        }
      case "tbMax_lt":
        return {
          maxWidth: BREAK_POINTS.tbMax,
        }

      case "pcMin_gt":
        return { minWidth: BREAK_POINTS.pcMin }
      default:
        return {}
    }
  }, [mq])

  return <MediaQuery {...props}>{children}</MediaQuery>
}
