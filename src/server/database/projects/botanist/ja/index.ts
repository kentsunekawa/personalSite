import { OmitIdSlug } from "@/types"
import { Project } from "@/graphql/generated/types"
import { getWorkHistory } from "@/server/database/workHistories"
import { getSkills, slugs } from "@/server/database/skills"
import description from "./description.md"

export const ja: OmitIdSlug<Project> = {
  title:
    "国内シェア 3 位のシャンプーブランドの EC サイト兼ブランドサイトの構築",
  belonging: getWorkHistory("JA", "ine"),
  period: {
    start: "2019-08-01",
    end: "2020-03-31",
  },
  position: "マークアップエンジニア",
  responsibility: "デザインをもとにしたフロントエンドのマークアップ",
  team: "ディレクター 1 名 / デザイナー 1 名 / マークアップエンジニア 1 名",
  technologies: getSkills([
    slugs.html5,
    slugs.css3,
    slugs.sass,
    slugs.javascript,
    slugs.jquery,
    slugs.ecbeing,
  ]),
  summary: "ecbeing（ECサイト構築パッケージ） を採用した、EC サイトの構築。",
  // description,
}
