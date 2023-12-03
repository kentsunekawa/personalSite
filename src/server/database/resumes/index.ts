import { Data } from "@/types"
import { Resume, Lang } from "@/graphql/generated/types"
import { CompanyNames, companyNames } from "./companyNames"
import { createProjects, slugs } from "../../graphql/resolvers/projects"
import { skills } from "../skills"
import { getWorkHistories } from "@/server/database/workHistories"
import introduction from "./introduction.md"

export type { CompanyNames }
export { companyNames }

export const masterResume: Data<Resume> = {
  [Lang.Ja]: {
    lang: Lang.Ja,
    summary: `2016 年に Web 業界に飛び込み Web デザイナーからキャリアをスタート。Web サイト制作においては国内外含む 6 つのアワード受賞に貢献。
    2021 年からは Web アプリケーション開発へのキャリアアップに成功し、いくつかのプロジェクトにおいて、技術選定や環境構築といった 0 からの立ち上げから担当。さらに経験が全くなかったモバイルアプリ開発も担当することとなり、Web / iOS / Android を含むクロスプラットフォームでの開発において、プロジェクト立ち上げから各アプリストアでのリリースまでクライアントアプリケーションの開発を主導するという経験を経る。`,
    skills,
    projects: createProjects({ lang: Lang.Ja }, [
      slugs.phr,
      slugs.hcu,
      slugs.alolink,
    ]),
    introduction,
    workHistories: getWorkHistories(Lang.Ja),
  },
  [Lang.En]: {
    lang: Lang.En,
    summary: "",
    skills: [],
    projects: createProjects({ lang: Lang.En }),
    workHistories: getWorkHistories(Lang.En),
  },
}

export const resumes: { [k in CompanyNames]: Resume } = {
  [companyNames.altura]: {
    lang: Lang.Ja,
    summary: "",
    skills: [],
    projects: createProjects({ lang: Lang.Ja }),
    workHistories: getWorkHistories(Lang.Ja),
  },
  [companyNames.foreignCompany]: {
    lang: Lang.En,
    summary: "",
    skills: [],
    projects: createProjects({ lang: Lang.En }),
    workHistories: getWorkHistories(Lang.En),
  },
}
