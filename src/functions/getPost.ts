import { client } from "@/graphql/client"
import {
  GetPostQuery,
  GetPostDocument,
  GetPostQueryVariables,
  Lang,
} from "@/graphql/generated/types"

export const getPost = (slug: string, lang: Lang = Lang.Ja) => {
  return client.query<GetPostQuery, GetPostQueryVariables>({
    query: GetPostDocument,
    variables: {
      slug,
      lang,
    },
  })
}
