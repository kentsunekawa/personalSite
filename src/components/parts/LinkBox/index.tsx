'use client'
// import from libraries
import Link from 'next/link'

// import from this project
import { useStyle } from '@/hooks'
import { Lang } from '@/graphql/generated/types'
import { ContentsBox } from '@/components/parts/contents/ContentsBox'
import { ReplaceLineFeedCodeToBr } from '@/components/parts/ReplaceLineFeedCodeToBr'
import { createStyles } from './styles'

export type Props = {
  lang: Lang
  href: string
  title: string
  caption?: string
  summary?: string
}

export const LinkBox: React.FC<Props> = ({ href, title, caption, summary }) => {
  const { styles } = useStyle(createStyles)
  return (
    <Link href={href} css={styles.container}>
      <div css={styles.bg} />
      <div className='shadow' />
      <div css={styles.contents}>
        <ContentsBox
          contents={{
            caption,
            title: {
              tag: 'h3',
              node: title,
            },
            summary: summary && (
              <ReplaceLineFeedCodeToBr>{summary}</ReplaceLineFeedCodeToBr>
            ),
          }}
        />
      </div>
    </Link>
  )
}
