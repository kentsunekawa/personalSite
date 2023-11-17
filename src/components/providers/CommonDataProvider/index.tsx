"use client"
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"
import { CommonData } from "@/types"

type CommonDataContextProps = CommonData

export const CommonDataContext = createContext<
  CommonDataContextProps | undefined
>(undefined!)
export const SetCommonDataContext = createContext<
  Dispatch<SetStateAction<CommonDataContextProps | undefined>>
>(undefined!)

export const CommonDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [commonData, setCommonData] = useState<CommonDataContextProps>()

  return (
    <CommonDataContext.Provider value={commonData}>
      <SetCommonDataContext.Provider value={setCommonData}>
        {children}
      </SetCommonDataContext.Provider>
    </CommonDataContext.Provider>
  )
}

export const useCommonDataContext = (): CommonDataContextProps => {
  const context = useContext(CommonDataContext)

  if (typeof context === "undefined") {
    throw new Error(
      "useCommonDataContext should be used within the CommonDataContext provider!"
    )
  }

  return context
}
