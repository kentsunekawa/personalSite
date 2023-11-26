import { GraphQLError } from "graphql"
import { projects as projectsData } from "@/server/database/projects"
import {
  Resolver,
  ResolverTypeWrapper,
  GetResumeQueryVariables,
  Lang,
  Resume,
} from "@/graphql/generated/types"
import { resumes, companyNames, CompanyNames } from "@/server/database/resumes"

export const createResume = ({
  companyName,
}: GetResumeQueryVariables): Resume => {
  const data =
    resumes[(companyName as CompanyNames) ?? companyNames.master] ?? null

  if (data === null) {
    throw new GraphQLError("resume is null")
  }

  return data
}

export const resume: Resolver<
  ResolverTypeWrapper<Resume>,
  {},
  {},
  GetResumeQueryVariables
> = (_, getResumeQueryVariables) => createResume(getResumeQueryVariables)
