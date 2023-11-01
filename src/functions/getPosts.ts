import { client } from "@/graphql/client"
import {
  GetPostsQuery,
  GetPostsDocument,
  GetPostsQueryVariables,
  Lang,
  SearchPostsInput,
  PostStatus,
} from "@/graphql/generated/types"

export const getPosts = (
  labels?: SearchPostsInput["labels"],
  lang: Lang = Lang.Ja
) => {
  return client.query<GetPostsQuery, GetPostsQueryVariables>({
    query: GetPostsDocument,
    variables: {
      lang,
      searchPostsInput: {
        status:
          process.env.NODE_ENV === "development" ? [] : [PostStatus.Published],
        labels,
      },
    },
  })
}
