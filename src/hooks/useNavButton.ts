import { useCallback, useMemo } from 'react'

// import from this project
import { PageName } from '@/constants'
import { getPageInfo } from '@/utils'
import { usePageState } from '@/hooks'

const navItems: PageName[] = ['home', 'profile', 'projects', 'experiences']

export const useNavButton = (onClickCurrentPage: () => void) => {
  const { pageState } = usePageState()

  const isJudgeCurrent = useCallback(
    (pageName: PageName) => pageState?.pageName === pageName,
    [pageState?.pageName],
  )

  const linksInfo = useMemo(
    () =>
      navItems.map((pageName) => {
        const isCurrent = isJudgeCurrent(pageName)
        const { displayName, createPath } = getPageInfo(pageName)
        return {
          isCurrent,
          pageName,
          label: displayName,
          props: {
            ...(isCurrent && pageState
              ? {
                  onClick: onClickCurrentPage,
                }
              : {
                  href: pageState && createPath(pageState.lang),
                }),
          },
        }
      }),
    [isJudgeCurrent, onClickCurrentPage, pageState],
  )

  return { linksInfo }
}
