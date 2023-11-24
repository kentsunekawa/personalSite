// import { client } from "@/graphql/client"
import {
  // GetPostsQuery,
  // GetPostsDocument,
  // GetPostsQueryVariables,
  Lang,
  SearchPostsInput,
  PostStatus,
} from "@/graphql/generated/types"
import { createPosts } from "@/server/graphql/resolvers/posts"

export const getPosts = (
  labels?: SearchPostsInput["labels"],
  lang: Lang = Lang.Ja
) => {
  const variables = {
    lang,
    searchPostsInput: {
      status:
        process.env.NODE_ENV === "development" ? [] : [PostStatus.Published],
      labels,
    },
  }

  // return client.query<GetPostsQuery, GetPostsQueryVariables>({
  //   query: GetPostsDocument,
  //   variables,
  // })

  return Promise.resolve({ data: { posts: createPosts(variables) } })
}
