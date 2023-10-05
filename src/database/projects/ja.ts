import { Project } from "@/graphql/generated/types"
import { organizations } from "@/database/organizations/ja"

export const projects: Project[] = [
  {
    id: "phr",
    title: "PHR 用スマートフォンアプリ開発",
    belonging: organizations.filter(({ id }) => id === "alturaX")[0],
    period: {
      start: "2022-03-01",
    },
    position: "モバイルアプリエンジニア",
    responsibility: "エンジニア",
    team: "PdM 1 名 / バックエンド 4 ~ 9 名 / フロントエンド 2 ~ 4 名",
    technologies: [],
  },
]
