import { OmitIdSlug } from "@/types"
import { Project } from "@/graphql/generated/types"
import { getWorkHistory } from "@/server/database/workHistories"
import { getSkills, slugs } from "@/server/database/skills"
import description from "./description.md"

export const ja: OmitIdSlug<Project> = {
  title: "健康診断結果閲覧アプリのクロスプラットフォーム開発",
  belonging: getWorkHistory("JA", "alturaX"),
  period: {
    start: "2022-03-01",
  },
  position:
    "フロントエンドチームリーダー / モバイルアプリエンジニア（iOS / Android） / Web フロントエンドエンジニア",
  responsibility:
    "技術選定 / 詳細設計 / 開発 / テスト / アプリストアへの審査提出およびリジェクト時の対応 / チームメンバーへの業務の割り振り / コードレビュー / デザインレビュー",
  team: "PdM 1 名 / デザイナー 1 名 / バックエンドエンジニア 4 ~ 9 名 / フロントエンドエンジニア 2 ~ 3 名",
  technologies: getSkills([
    slugs.typescript,
    slugs.react,
    slugs.reactNative,
    slugs.expo,
    slugs.graphql,
    slugs.apollo,
  ]),
  summary: `健康診断を受けた本人がその結果を確認したり、医療機関へ再検査の予約ができるアプリケーションの開発プロジェクト。React Native を採用し、iOS、Android、Web を含むクロスプラットフォームで開発を行った。`,
  description,
}
