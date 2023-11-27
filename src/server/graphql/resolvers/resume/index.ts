import {
  Resolver,
  ResolverTypeWrapper,
  GetResumeQueryVariables,
  Resume,
  Maybe,
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
  Maybe<ResolverTypeWrapper<Resume>>,
  {},
  {},
  GetResumeQueryVariables
> = (_, getResumeQueryVariables, context) => {
  console.log(context)

  return createResume(getResumeQueryVariables)
}
