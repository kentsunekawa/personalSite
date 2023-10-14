import { client } from "@/graphql/client"
import {
  GetProjectsQuery,
  GetProjectsDocument,
  GetProjectsQueryVariables,
  Lang,
} from "@/graphql/generated/types"

export const getProjects = (lang: Lang = Lang.Ja) => {
  return client.query<GetProjectsQuery, GetProjectsQueryVariables>({
    query: GetProjectsDocument,
    variables: {
      lang,
    },
  })
}
