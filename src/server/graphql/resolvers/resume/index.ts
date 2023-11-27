// import from libraries
import { GraphQLError } from "graphql"

// import from this project
import { convertCookieString } from "@/utils"
import {
  Resolver,
  ResolverTypeWrapper,
  GetResumeQueryVariables,
  Resume,
  Maybe,
} from "@/graphql/generated/types"
import { masterResume, resumes, CompanyNames } from "@/server/database/resumes"
import { users } from "@/server/database/users"
import type { TContext } from "@/app/graphql/route"

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
  TContext,
  GetResumeQueryVariables
> = (_, getResumeQueryVariables, context, b) => {
  const cookies = convertCookieString(context.cookie)

  const companyName = cookies.companyName
  const password = cookies.password

  const authorized = (() => {
    if (companyName && password) {
      const user = users.find(({ name }) => name === companyName)
      return user && user.password === password
    }
    return false
  })()

  if (!authorized)
    throw new GraphQLError("unauthorized", {
      extensions: {
        code: "unauthorized",
      },
    })

  return createResume(getResumeQueryVariables)
}
