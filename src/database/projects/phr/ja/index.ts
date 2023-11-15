import { OmitIdSlug } from "@/types"
import { Project } from "@/graphql/generated/types"
import { getWorkHistory } from "@/database/workHistories"
import { getSkills, slugs } from "@/database/skills"
import description from "./description.md"

export const ja: OmitIdSlug<Project> = {
  title: "PHR 用スマートフォンアプリ開発",
  belonging: getWorkHistory("EN", "alturaX"),
  period: {
    start: "2022-03-01",
  },
  position: "モバイルアプリエンジニア",
  responsibility: "エンジニア",
  team: "PdM 1 名 / バックエンド 4 ~ 9 名 / フロントエンド 2 ~ 4 名",
  technologies: getSkills([slugs.react, slugs.reactNative, slugs.graphql]),
  description,
}
