import { Lang, PostLabel, PostStatus } from "@/graphql/generated/types"
import content from "./content.md"
import type { PostRowData } from "../../slugs"

export const en: PostRowData = {
  lang: Lang.En,
  title: "A title of a article (slagName)",
  date: "2023-09-25",
  labels: [PostLabel.HighPriority],
  status: PostStatus.Published,
  content,
}
