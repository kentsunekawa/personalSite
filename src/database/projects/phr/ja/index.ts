import { OmitIdSlug } from "@/types"
import { Project } from "@/graphql/generated/types"
import { getWorkHistory } from "@/database/workHistories"
import { getSkills, slugs } from "@/database/skills"
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
  summary:
    "健康診断を受けた本人が結果を閲覧することができるアプリケーションの開発プロジェクトにおいて、クライアントアプリの開発を担当。\nReact Native を採用し、iOS、Android、Web を含むクロスプラットフォームで開発を行った。",
  // description,
}
