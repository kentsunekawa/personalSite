import { OmitIdSlug } from "@/types"
import { Project } from "@/graphql/generated/types"
import { getWorkHistory } from "@/database/workHistories"
import { getSkills, slugs } from "@/database/skills"
import description from "./description.md"

export const ja: OmitIdSlug<Project> = {
  title: "国内シェア 1 位のヘアアイロンブランドのブランドサイト構築",
  belonging: getWorkHistory("JA", "ine"),
  period: {
    start: "2020-03-01",
    end: "2020-07-31",
  },
  position: "マークアップエンジニア",
  responsibility: "デザインをもとにしたフロントエンドのマークアップ",
  team: "ディレクター 1 名 / デザイナー 1 名 / マークアップエンジニア 2 名",
  technologies: getSkills([
    slugs.html5,
    slugs.css3,
    slugs.sass,
    slugs.javascript,
    slugs.jquery,
    slugs.wordpress,
  ]),
  summary: "WordPress を用いたサイト構築。",
  // description,
}
