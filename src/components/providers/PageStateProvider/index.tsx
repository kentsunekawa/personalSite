"use client"
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"
import { PageState } from "@/types"

type PageStateContextProps = PageState

export const PageStateContext = createContext<
  PageStateContextProps | undefined
>(undefined!)
export const SetPageStateContext = createContext<
  Dispatch<SetStateAction<PageStateContextProps | undefined>>
>(undefined!)

export const PageStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pageState, setPageState] = useState<PageStateContextProps>()

  return (
    <PageStateContext.Provider value={pageState}>
      <SetPageStateContext.Provider value={setPageState}>
        {children}
      </SetPageStateContext.Provider>
    </PageStateContext.Provider>
  )
}

export const usePageStateContext = (): PageStateContextProps => {
  const context = useContext(PageStateContext)

  if (typeof context === "undefined") {
    throw new Error(
      "usePageStateContext should be used within the PageStateContext provider!"
    )
  }

  return context
}
