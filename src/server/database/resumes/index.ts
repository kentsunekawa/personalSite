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
    summary: `職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります職務経歴が入ります`,
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
