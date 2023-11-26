import { Resume, Lang } from "@/graphql/generated/types"
import { CompanyNames, companyNames } from "./companyNames"
import { createProjects } from "../../graphql/resolvers/projects"

export type { CompanyNames }
export { companyNames }

export const resumes: { [k in CompanyNames]: Resume } = {
  [companyNames.master]: {
    lang: Lang.Ja,
    projects: createProjects({ lang: Lang.Ja }),
  },
  [companyNames.masterEn]: {
    lang: Lang.En,
    projects: createProjects({ lang: Lang.En }),
  },
  [companyNames.altura]: {
    lang: Lang.Ja,
    projects: createProjects({ lang: Lang.Ja }),
  },
  [companyNames.foreignCompany]: {
    lang: Lang.En,
    projects: createProjects({ lang: Lang.En }),
  },
}
