"use client"
// import from libraries

// import from this project
import { Lang, Project } from "@/graphql/generated/types"
import { PageState } from "@/types"
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export type Props = PageState & {
  children: React.ReactNode
}

const contents = {
  [Lang.En]: {
    message: "This contnet has not been written by this language yet.",
  },
  [Lang.Ja]: {
    message: "このコンテンツはまだこの言語で書かれていません。",
  },
} as const

export const IsTranslated: React.FC<Props> = ({ children, ...pageState }) => {
  const { lang, translatedLangs } = pageState
  const { styles } = useStyle(createStyles)
  return translatedLangs[lang] ? (
    <>{children}</>
  ) : (
    <div css={styles.container}>{contents[lang].message}</div>
  )
}
