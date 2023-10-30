import { OmitIdSlug } from "@/types"
import { Post, PostLabel, PostStatus } from "@/graphql/generated/types"
import content from "./content.md"

export const en: OmitIdSlug<Post> = {
  title: "A title of a article",
  date: "2023-09-25",
  labels: [PostLabel.HighPriority],
  status: PostStatus.Published,
  content,
}
