import { Post, PostLabel, PostStatus } from "@/graphql/generated/types"
import content from "./content.md"

export const en: Omit<Post, "id" | "slug"> = {
  title: "A title of a article",
  date: "2023-09-25",
  labels: [PostLabel.HighPriority],
  status: PostStatus.Published,
  content,
}
