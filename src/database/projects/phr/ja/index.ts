import { OmitIdSlug } from "@/types"
import { Project } from "@/graphql/generated/types"
import { getWorkHistory } from "@/database/workHistories"
import { getSkills, slugs } from "@/database/skills"
import description from "./description.md"

export const ja: OmitIdSlug<Project> = {
  title: "PHR アプリケーションのクロスプラットフォーム開発",
  belonging: getWorkHistory("JA", "alturaX"),
  period: {
    start: "2022-03-01",
  },
  position:
    "フロントエンドチームリーダー / モバイルアプリエンジニア（iOS / Android） / Web フロントエンドエンジニア",
  responsibility:
    "詳細設計 / 開発 / テスト / アプリストアへの審査提出およびリジェクト時の対応 / チームメンバーへの業務の割り振り / コードレビュー",
  team: "PdM 1 名 / バックエンド 4 ~ 9 名 / フロントエンド 2 ~ 4 名",
  technologies: getSkills([
    slugs.typescript,
    slugs.react,
    slugs.reactNative,
    slugs.expo,
    slugs.graphql,
    slugs.apollo,
  ]),
  description,
}
