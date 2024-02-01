'use client'
// import from libraries

// import from this project
import { PageState } from '@/types'
import { getPageInfo } from '@/utils'
import { useStyle } from '@/hooks'
import { Lang, Post } from '@/graphql/generated/types'
import { PageBase } from '@/components/globals/PageBase'
import { PageContent } from '@/components/parts/PageContent'
import { LinkBox } from '@/components/parts/LinkBox'
import { BoxList } from '@/components/parts/contents/BoxList'
import { SectionBox } from '@/components/parts/SectionBox'
import { Texts } from '@/components/parts/Texts'
import { createStyles } from './styles'

type Props = PageState & {
  posts: Post[]
}

const contents = {
  [Lang.Ja]: {
    summary:
      'エンジニアとしてのキャリアの中で、経験したこと考えたことを記事として残していきます。',
    emptyMessage: 'まだ記事はありません。',
  },
  [Lang.En]: {
    summary: 'Here is a description.',
    emptyMessage: 'There is still no article.',
  },
} as const

export const Experiences: React.FC<Props> = ({ lang, posts }) => {
  const { styles } = useStyle(createStyles)
  return (
    <PageBase>
      <PageContent
        breadCrumsInfo={{
          lang,
          clumbs: [
            {
              pageName: 'home',
            },
            {
              isCurrent: true,
              pageName: 'experiences',
            },
          ],
        }}
        summary={contents[lang].summary}
      >
        <SectionBox
          title={{
            tag: 'h2',
            text: 'EXPERIENCES',
          }}
          main={
            <>
              {posts.length > 0 ? (
                <BoxList
                  withSeparator={false}
                  gap={[4, 0]}
                  contents={posts.map(({ id, slug, title, summary, date }) => ({
                    key: id,
                    node: (
                      <LinkBox
                        lang={lang}
                        href={getPageInfo('experience').createPath(lang, {
                          slug,
                        })}
                        title={title}
                        caption={date}
                        summary={summary ?? undefined}
                      />
                    ),
                  }))}
                />
              ) : (
                <div css={styles.emptyArea}>
                  <Texts.Heading align='center' size='h5'>
                    {contents[lang].emptyMessage}
                  </Texts.Heading>
                </div>
              )}
            </>
          }
        />
      </PageContent>
    </PageBase>
  )
}
