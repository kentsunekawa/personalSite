import { OmitIdSlug } from "@/types"
import { Post, PostLabel, PostStatus } from "@/graphql/generated/types"
import content from "./content.md"

export const ja: OmitIdSlug<Post> = {
  title: "記事タイトル",
  date: "2023-09-25",
  labels: [PostLabel.HighPriority],
  status: PostStatus.Published,
  content,
}
