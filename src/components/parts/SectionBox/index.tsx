'use client'
// import from libraries

// import from this project
import { useStyle } from '@/hooks'
import { createStyles } from './styles'
import { Texts, HeadingProps } from '@/components/parts/Texts'

export type Props = {
  title: {
    tag?: HeadingProps['tag']
    text: string
  }
  main: React.ReactNode
}

export const SectionBox: React.FC<Props> = ({ title, main }) => {
  const { styles } = useStyle(createStyles)
  return (
    <section css={styles.container}>
      <div css={styles.titleArea}>
        <Texts.Heading tag={title.tag} size='h1' weight='b'>
          {title.text}
        </Texts.Heading>
      </div>
      <div css={styles.main}>{main}</div>
    </section>
  )
}
