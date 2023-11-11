"use client"
// import from libraries
import { HTMLAttributeAnchorTarget } from "react"
import Link from "next/link"

// import from this project
import { InsertStyles } from "@/types"
import { useStyle } from "@/hooks"
import { createStyles, StyleProps } from "./styles"

export type Props = {
  href?: string
  target?: HTMLAttributeAnchorTarget
  onClick?: () => void
  insertStyles?: InsertStyles<"container">
  children: React.ReactNode
} & StyleProps

export const Button: React.FC<Props> = ({
  href,
  target,
  type,
  size,
  color,
  onClick,
  insertStyles,
  children,
}) => {
  const { styles } = useStyle(createStyles, { type, size, color })
  return href ? (
    <Link
      href={href}
      onClick={onClick}
      target={target}
      css={[styles.container, insertStyles?.container]}
    >
      {children}
    </Link>
  ) : (
    <button type="button" css={[styles.container, insertStyles?.container]}>
      {children}
    </button>
  )
}
