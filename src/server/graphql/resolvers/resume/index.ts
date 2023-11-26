import {
  Resolver,
  ResolverTypeWrapper,
  GetResumeQueryVariables,
  Resume,
} from "@/graphql/generated/types"
import { masterResume, resumes, CompanyNames } from "@/server/database/resumes"

export const createResume = ({
  companyName,
  lang,
}: GetResumeQueryVariables): Resume | null => {
  if (companyName) {
    return resumes[companyName as CompanyNames] ?? null
  }
  return lang ? masterResume[lang] : null
}

export const resume: Resolver<
  ResolverTypeWrapper<Resume | null>,
  {},
  {},
  GetResumeQueryVariables
> = (_, getResumeQueryVariables) => createResume(getResumeQueryVariables)
