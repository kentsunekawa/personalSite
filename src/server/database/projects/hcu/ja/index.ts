import { OmitIdSlug } from "@/types"
import { Project } from "@/graphql/generated/types"
import { getWorkHistory } from "@/server/database/workHistories"
import { getSkills, slugs } from "@/server/database/skills"
import description from "./description.md"

export const ja: OmitIdSlug<Project> = {
  title: "健康診断システムのクライアント SPA 開発",
  belonging: getWorkHistory("JA", "alturaX"),
  period: {
    start: "2022-03-01",
  },
  position: "フロントエンドチームリーダー / フロントエンドエンジニア",
  responsibility:
    "技術選定 / 詳細設計 / 開発 / テスト / チームメンバーへの業務の割り振り / コードレビュー / デザインレビュー",
  team: "PdM 1 名 / デザイナー 1 名 / バックエンドエンジニア 4 ~ 9 名 / フロントエンドエンジニア 2 ~ 4 名",
  technologies: getSkills([
    slugs.typescript,
    slugs.react,
    slugs.graphql,
    slugs.apollo,
    slugs.materialUi,
    slugs.jest,
    slugs.cypress,
  ]),
  summary: `医療機関に導入する健康診断システムの開発プロジェクト。
  クライアントアプリケーションを React を用いた SPA として開発。`,
  description,
}
