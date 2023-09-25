import { Post, PostLabel, PostStatus } from "@/graphql/generated/types"

export const posts: Post[] = [
  {
    id: "1",
    title: "記事タイトル",
    date: "2023-09-25",
    labels: [PostLabel.HighPriority],
    slug: "articleSlug",
    status: PostStatus.Published,
  },
]
