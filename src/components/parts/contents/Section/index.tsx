"use client"
// import from libraries

// import from this project
import { useStyle } from "@/hooks"
import { HeadingSize } from "@/styles/commonStyles/textStyles"
import { Texts } from "@/components/parts/Texts"
import { createStyles } from "./styles"

export type WrapperProps = {
  children: React.ReactNode
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { styles } = useStyle(createStyles)
  return <div css={styles.container}>{children}</div>
}

export type SectionProps = {
  title: {
    tag: HeadingSize
    node: React.ReactNode
  }
  children: React.ReactNode
}

export const Box: React.FC<SectionProps> = ({ title, children }) => {
  const { styles } = useStyle(createStyles)
  return (
    <section css={styles.section.container}>
      <div css={styles.section.titleArea}>
        <Texts.Heading size="h5" tag={title.tag}>
          {title.node}
        </Texts.Heading>
      </div>
      <div css={styles.section.main}>{children}</div>
    </section>
  )
}

export const Section = {
  Wrapper,
  Box,
}
