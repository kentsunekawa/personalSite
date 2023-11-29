"use client"
// import from libraries
import { useMemo } from "react"
import dynamic from "next/dynamic"

// import from this project
import { BREAK_POINTS, Mq } from "@/styles/mixin"

export type Props = {
  mq?: Mq
  children: React.ReactNode
  print?: boolean
}

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
})

export const MQ: React.FC<Props> = ({ mq, children, print }) => {
  const props = useMemo(() => {
    switch (mq) {
      case "spMax_lt":
        return {
          maxWidth: BREAK_POINTS.spMax,
          print,
        }
      case "tbMin_gt":
        return {
          minWidth: BREAK_POINTS.tbMin,
          print,
        }
      case "tbMax_lt":
        return {
          maxWidth: BREAK_POINTS.tbMax,
          print,
        }
      case "pcMin_gt":
        return { minWidth: BREAK_POINTS.pcMin, print }
      default:
        return {
          minWidth: 0,
          print,
        }
    }
  }, [mq, print])

  return <MediaQuery {...props}>{children}</MediaQuery>
}
