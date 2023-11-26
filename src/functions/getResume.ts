// import { client } from "@/graphql/client"
import {
  // GetResumeQuery,
  // GetResumeDocument,
  // GetResumeQueryVariables,
  Lang,
} from "@/graphql/generated/types"
import { createResume } from "@/server/graphql/resolvers/resume"

export const getResume = (companyName: string) => {
  const variables = {
    companyName,
  }

  // return client.query<GetResumeQuery, GetResumeQueryVariables>({
  //   query: GetResumeDocument,
  //   variables,
  // })

  return Promise.resolve({
    data: {
      resume: createResume(variables),
    },
  })
}
