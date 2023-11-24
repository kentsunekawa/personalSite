// import { client } from "@/graphql/client"
import {
  // GetPostQuery,
  // GetPostDocument,
  // GetPostQueryVariables,
  Lang,
} from "@/graphql/generated/types"
import { createPost } from "@/server/graphql/resolvers/post"

export const getPost = (slug: string, lang: Lang = Lang.Ja) => {
  const variables = {
    slug,
    lang,
  }

  // return client.query<GetPostQuery, GetPostQueryVariables>({
  //   query: GetPostDocument,
  //   variables,
  // })

  return Promise.resolve({
    data: {
      post: createPost(variables),
    },
  })
}
