"use client"
// import from libraries
import { useEffect } from "react"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"

// import from this project
import { InsertStyles } from "@/types"
import { useStyle, useThemeName } from "@/hooks"
import { createStyles } from "./styles"

type Props = {
  children: string
  insertStyles?: InsertStyles<"container">
}

export const MarkdownDisplay: React.FC<Props> = ({
  children,
  insertStyles,
}) => {
  const { theme } = useThemeName()
  const { styles } = useStyle(createStyles, { theme })

  useEffect(() => {
    const linkes = document.querySelectorAll("a")
    linkes.forEach((a) => {
      a.setAttribute("target", "_blank")
    })
  }, [])

  return (
    <div css={[styles.container, insertStyles?.container]}>
      <ReactMarkdown rehypePlugins={[gfm]} className="markdown-body">
        {children}
      </ReactMarkdown>
    </div>
  )
}
