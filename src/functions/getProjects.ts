// import { client } from "@/graphql/client"
import {
  // GetProjectsQuery,
  // GetProjectsDocument,
  // GetProjectsQueryVariables,
  Lang,
} from "@/graphql/generated/types"

import { createProjects } from "@/server/graphql/resolvers/projects"

export const getProjects = (lang: Lang = Lang.Ja) => {
  const variables = {
    lang,
  }

  // return client.query<GetProjectsQuery, GetProjectsQueryVariables>({
  //   query: GetProjectsDocument,
  //   variables,
  // })

  return Promise.resolve({
    data: { projects: createProjects(variables) },
  })
}
