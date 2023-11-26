import { Data } from "@/types"
import { Resume, Lang } from "@/graphql/generated/types"
import { CompanyNames, companyNames } from "./companyNames"
import { createProjects } from "../../graphql/resolvers/projects"

export type { CompanyNames }
export { companyNames }

export const masterResume: Data<Resume> = {
  [Lang.Ja]: {
    lang: Lang.Ja,
    summary: "",
    skills: [],
    projects: createProjects({ lang: Lang.Ja }),
    introduction: "",
  },
  [Lang.En]: {
    lang: Lang.En,
    summary: "",
    skills: [],
    projects: createProjects({ lang: Lang.En }),
    introduction: "",
  },
}

export const resumes: { [k in CompanyNames]: Resume } = {
  [companyNames.altura]: {
    lang: Lang.Ja,
    summary: "",
    skills: [],
    projects: createProjects({ lang: Lang.Ja }),
    introduction: "",
  },
  [companyNames.foreignCompany]: {
    lang: Lang.En,
    summary: "",
    skills: [],
    projects: createProjects({ lang: Lang.En }),
    introduction: "",
  },
}
