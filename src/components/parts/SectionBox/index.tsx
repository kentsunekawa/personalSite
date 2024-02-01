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
      <div css={styles.titleArea.container}>
        <div css={styles.titleArea.inner}>
          <Texts.Heading
            tag={title.tag}
            weight='b'
            insertCss={styles.titleArea.text}
          >
            {title.text}
          </Texts.Heading>
        </div>
      </div>
      <div css={styles.main}>
        <div css={styles.inner}>{main}</div>
      </div>
    </section>
  )
}
