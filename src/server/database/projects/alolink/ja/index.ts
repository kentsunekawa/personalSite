import { OmitIdSlug } from "@/types"
import { Project } from "@/graphql/generated/types"
import { getWorkHistory } from "@/server/database/workHistories"
import { getSkills, slugs } from "@/server/database/skills"
import description from "./description.md"

export const ja: OmitIdSlug<Project> = {
  title: "医療機関向けタレントマネジメントシステムのクライアント SPA 開発",
  belonging: getWorkHistory("JA", "alturaX"),
  period: {
    start: "2021-06-01",
    end: "2022-02-28",
  },
  position: "フロントエンドチームリーダー / フロントエンドエンジニア",
  responsibility:
    "技術選定 / 詳細設計 / 開発 / テスト / チームメンバーへの業務の割り振り / コードレビュー",
  team: "PdM 1 名 / デザイナー 1 名 / バックエンドエンジニア 2 名 / フロントエンドエンジニア 2 名",
  technologies: getSkills([
    slugs.typescript,
    slugs.react,
    slugs.graphql,
    slugs.apollo,
    slugs.cypress,
  ]),
  summary: `医療機関特化のタレントマネジメントシステムの開発プロジェクト。
  クライアントアプリケーションを React を用いた SPA として開発。`,
  description,
}
