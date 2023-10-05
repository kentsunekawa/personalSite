import { client } from "@/graphql/client"
import {
  GetPostsQuery,
  GetPostsDocument,
  GetPostsQueryVariables,
  Lang,
} from "@/graphql/generated/types"

export const getPosts = (lang: Lang = Lang.Ja) => {
  return client.query<GetPostsQuery, GetPostsQueryVariables>({
    query: GetPostsDocument,
    variables: {
      lang,
    },
  })
}
