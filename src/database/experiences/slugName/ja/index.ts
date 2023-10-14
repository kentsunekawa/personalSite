import { Post, PostLabel, PostStatus } from "@/graphql/generated/types"
import content from "./content.md"

export const ja: Omit<Post, "id" | "slug"> = {
  title: "記事タイトル",
  date: "2023-09-25",
  labels: [PostLabel.HighPriority],
  status: PostStatus.Published,
  content,
}
