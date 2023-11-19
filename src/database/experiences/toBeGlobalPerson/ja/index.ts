import { Lang, PostLabel, PostStatus } from "@/graphql/generated/types"
import content from "./content.md"
import type { PostRowData } from "../../slugs"

export const ja: PostRowData = {
  lang: Lang.Ja,
  title: "グローバルパーソンを目指して",
  date: "2023-09-25",
  labels: [PostLabel.HighPriority],
  status: PostStatus.Published,
  content,
}
