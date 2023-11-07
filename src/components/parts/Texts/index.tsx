"use client"
// import from libraries
import { RuleSet } from "styled-components"

// import from this project
import { useStyle } from "@/hooks"
import {
  createStyles,
  HeadingSize,
  Size,
  Weight,
  Align,
} from "@/styles/commonStyles/textStyles"

type CommonProps = {
  weight?: Weight
  align?: Align
  css?: RuleSet<object>
  children: React.ReactNode
}

export type HeadingProps = CommonProps & {
  tag?: HeadingSize
  size?: HeadingSize
}

export const Heading: React.FC<HeadingProps> = ({
  tag,
  size = "h1",
  weight = "400",
  align = "left",
  css,
  children,
}) => {
  const { styles } = useStyle(createStyles)

  const combinedCss = [
    styles.align[align],
    styles.weight[weight],
    styles.heading[size],
    css,
  ]

  switch (tag) {
    case "h1":
      return <h1 css={combinedCss}>{children}</h1>
    case "h2":
      return <h2 css={combinedCss}>{children}</h2>
    case "h3":
      return <h3 css={combinedCss}>{children}</h3>
    case "h4":
      return <h4 css={combinedCss}>{children}</h4>
    case "h5":
      return <h5 css={combinedCss}>{children}</h5>
    case "h6":
      return <h6 css={combinedCss}>{children}</h6>
    default:
      return <p css={combinedCss}>{children}</p>
  }
}

export type SubHeadingProps = CommonProps & {
  tag?: HeadingSize
  size?: Size
}

export const SubHeading: React.FC<SubHeadingProps> = ({
  tag,
  size = "medium",
  weight = "400",
  align = "left",
  css,
  children,
}) => {
  const { styles } = useStyle(createStyles)

  const combinedCss = [
    styles.align[align],
    styles.weight[weight],
    styles.subHeading[size],
    css,
  ]

  switch (tag) {
    case "h1":
      return <h1 css={combinedCss}>{children}</h1>
    case "h2":
      return <h2 css={combinedCss}>{children}</h2>
    case "h3":
      return <h3 css={combinedCss}>{children}</h3>
    case "h4":
      return <h4 css={combinedCss}>{children}</h4>
    case "h5":
      return <h5 css={combinedCss}>{children}</h5>
    case "h6":
      return <h6 css={combinedCss}>{children}</h6>
    default:
      return <p css={combinedCss}>{children}</p>
  }
}

export type TextProps = CommonProps & {
  size?: Size
}

export const Text: React.FC<TextProps> = ({
  size = "medium",
  weight = "400",
  align = "left",
  css,
  children,
}) => {
  const { styles } = useStyle(createStyles)

  return (
    <p
      css={[styles.align[align], styles.weight[weight], styles.text[size], css]}
    >
      {children}
    </p>
  )
}

export type CaptionProps = CommonProps & {
  css?: RuleSet<object>
  children: React.ReactNode
}

export const Caption: React.FC<CaptionProps> = ({
  css,
  weight = "400",
  align = "left",
  children,
}) => {
  const { styles } = useStyle(createStyles)

  return (
    <p css={[styles.align[align], styles.weight[weight], styles.caption, css]}>
      {children}
    </p>
  )
}

export const Texts = {
  Heading,
  SubHeading,
  Text,
  Caption,
}
