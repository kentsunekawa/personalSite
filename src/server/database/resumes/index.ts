import { Data } from "@/types"
import { Resume, Lang } from "@/graphql/generated/types"
import { CompanyNames, companyNames } from "./companyNames"
import { createProjects, slugs } from "../../graphql/resolvers/projects"
import { skills } from "../skills"

export type { CompanyNames }
export { companyNames }

export const masterResume: Data<Resume> = {
  [Lang.Ja]: {
    lang: Lang.Ja,
    summary:
      "職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります",
    skills,
    projects: createProjects({ lang: Lang.Ja }, [
      slugs.phr,
      slugs.hcu,
      slugs.alolink,
    ]),
    introduction: [
      {
        title: "タイトルタイトルタイトル",
        content:
          "私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です",
      },
      {
        title: "タイトルタイトルタイトル",
        content:
          "私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です",
      },
      {
        title: "タイトルタイトルタイトル",
        content:
          "私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です私は〇〇な人間です",
      },
    ],
  },
  [Lang.En]: {
    lang: Lang.En,
    summary: "",
    skills: [],
    projects: createProjects({ lang: Lang.En }),
    introduction: [],
  },
}

export const resumes: { [k in CompanyNames]: Resume } = {
  [companyNames.altura]: {
    lang: Lang.Ja,
    summary: "",
    skills: [],
    projects: createProjects({ lang: Lang.Ja }),
    introduction: [],
  },
  [companyNames.foreignCompany]: {
    lang: Lang.En,
    summary: "",
    skills: [],
    projects: createProjects({ lang: Lang.En }),
    introduction: [],
  },
}
