'use client'
// import from libraries
import Link from 'next/link'

// import from this project
import { Lang, Post as PostType } from '@/graphql/generated/types'
import { getPageInfo, formatDateString } from '@/utils'
import { useStyle } from '@/hooks'
import { Texts } from '@/components/parts/Texts'
import { createStyles } from './styles'

export type Post = Pick<PostType, 'id' | 'date' | 'slug' | 'title'>

export type Props = {
  posts: Post[]
  lang: Lang
}

export const Posts: React.FC<Props> = ({ posts, lang }) => {
  const { styles } = useStyle(createStyles)

  if (posts.length < 1) return null

  return (
    <div css={styles.container}>
      <div css={styles.row}>
        <Texts.Heading size='h6' lineHeight={3}>
          Latest posts
        </Texts.Heading>
      </div>
      <div css={styles.row}>
        <ul css={styles.list}>
          {posts.map(({ id, slug, title, date }) => (
            <li key={id} css={styles.item}>
              <Link
                href={getPageInfo('experience').createPath(lang, {
                  slug,
                })}
                css={styles.box}
              >
                <Texts.Caption insertCss={styles.date} lineHeight={2}>
                  {formatDateString(date, 'EN')}
                </Texts.Caption>
                <Texts.Text insertCss={styles.title} lineHeight={2}>
                  {title}
                </Texts.Text>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
