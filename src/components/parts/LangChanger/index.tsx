"use client"
// import from libraries
import { useMemo } from "react"
import Link from "next/link"

// import from this project
import { PageState } from "@/types"
import { getPageInfo } from "@/utils"
import { Lang } from "@/graphql/generated/types"
import { useStyle, usePageState } from "@/hooks"
import { createStyles } from "./styles"

export type LangInfo = {
  [k in Lang]: boolean
}

type Props = {
  langInfo?: LangInfo
}

const createHref = (lang: Lang, pageState: PageState) =>
  getPageInfo(pageState.pageName).createPath(lang, pageState.pathInfo)

export const LangChanger: React.FC<Props> = ({
  langInfo = {
    [Lang.Ja]: true,
    [Lang.En]: true,
  },
}) => {
  const { styles } = useStyle(createStyles)

  const { pageState } = usePageState()

  const options = useMemo(
    () =>
      pageState
        ? [
            pageState.lang !== "EN" && langInfo.EN
              ? {
                  label: "English",
                  href: createHref("EN", pageState),
                }
              : null,
            pageState.lang !== "JA" && langInfo.JA
              ? {
                  label: "Japanese",
                  href: createHref("JA", pageState),
                }
              : null,
          ].filter((option): option is NonNullable<typeof option> => !!option)
        : null,
    [langInfo, pageState]
  )

  if (!options) return null

  return (
    <div css={styles.container}>
      {options.length > 0 && (
        <>
          {options.map(({ label, href }) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
        </>
      )}
    </div>
  )
}
