'use client'
// import from libraries

// import from this project
import { Css } from '@/types'
import { useStyle } from '@/hooks'
import {
  createStyles,
  HeadingSize,
  Size,
  Weight,
  Align,
} from '@/styles/commonStyles/textStyles'

type CommonProps = {
  lineHeight?: number
  weight?: Weight
  align?: Align
  insertCss?: Css
  title?: string
  children: React.ReactNode
}

export type HeadingProps = CommonProps & {
  tag?: HeadingSize
  size?: HeadingSize
}

export const Heading: React.FC<HeadingProps> = ({
  lineHeight,
  tag,
  size = 'h1',
  weight = 'm',
  align = 'left',
  insertCss,
  title,
  children,
}) => {
  const { styles } = useStyle(createStyles, { lineHeight })

  const combinedCss = [
    styles.base,
    styles.align[align],
    styles.weight[weight],
    styles.heading[size],
    insertCss,
  ]

  switch (tag) {
    case 'h1':
      return (
        <h1 title={title} css={combinedCss}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 title={title} css={combinedCss}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 title={title} css={combinedCss}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 title={title} css={combinedCss}>
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5 title={title} css={combinedCss}>
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6 title={title} css={combinedCss}>
          {children}
        </h6>
      )
    default:
      return (
        <p title={title} css={combinedCss}>
          {children}
        </p>
      )
  }
}

type TextProps = CommonProps & {
  size?: Size
}

export const Text: React.FC<TextProps> = ({
  lineHeight,
  size = 'm',
  weight = 'm',
  align = 'left',
  insertCss,
  title,
  children,
}) => {
  const { styles } = useStyle(createStyles, { lineHeight })

  return (
    <p
      title={title}
      css={[
        styles.base,
        styles.align[align],
        styles.weight[weight],
        styles.text[size],
        insertCss,
      ]}
    >
      {children}
    </p>
  )
}

export const Caption: React.FC<CommonProps> = ({
  weight = 'm',
  align = 'left',
  insertCss,
  title,
  children,
}) => {
  const { styles } = useStyle(createStyles)

  return (
    <p
      title={title}
      css={[
        styles.align[align],
        styles.weight[weight],
        styles.caption,
        insertCss,
      ]}
    >
      {children}
    </p>
  )
}

export const Texts = {
  Heading,
  // SubHeading,
  Text,
  Caption,
}
