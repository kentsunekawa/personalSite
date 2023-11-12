import { useCallback, useMemo } from "react"

// import from this project
import { PageName } from "@/constants"
import { getPageInfo } from "@/utils"
import { usePageState } from "@/hooks"

const navItems: { pageName: PageName; label: string }[] = [
  { pageName: "home", label: "Home" },
  { pageName: "profile", label: "Profile" },
  { pageName: "projects", label: "Projects" },
  { pageName: "experiences", label: "Experiences" },
]

export const useNavButton = (onClickCurrentPage: () => void) => {
  const { pageState } = usePageState()

  const isJudgeCurrent = useCallback(
    (pageName: PageName) => pageState?.pageName === pageName,
    [pageState?.pageName]
  )

  const linksInfo = useMemo(
    () =>
      navItems.map(({ pageName, label }) => {
        const isCurrent = isJudgeCurrent(pageName)
        return {
          isCurrent,
          pageName,
          label,
          props: {
            ...(isCurrent && pageState
              ? {
                  onClick: onClickCurrentPage,
                }
              : {
                  href:
                    pageState &&
                    getPageInfo(pageName).createPath(pageState.lang),
                }),
          },
        }
      }),
    [isJudgeCurrent, onClickCurrentPage, pageState]
  )

  return { linksInfo }
}
