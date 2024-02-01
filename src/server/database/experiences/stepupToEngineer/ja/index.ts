import { Lang, PostLabel, PostStatus } from '@/graphql/generated/types'
import content from './content.md'
import type { PostRowData } from '../../slugs'

export const ja: PostRowData = {
  lang: Lang.Ja,
  title:
    'Web 制作のクリエイターから Web 開発のエンジニアへのステップアップについて',
  date: '2023-09-25',
  labels: [PostLabel.HighPriority],
  status: PostStatus.Published,
  summary:
    '記事の要約が入ります記事の要約が入ります記事の要約が入ります記事の要約が入ります記事の要約が入ります記事の要約が入ります',
  content,
}
