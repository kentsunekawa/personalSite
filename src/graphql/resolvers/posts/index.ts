import { posts as postsData } from "@/database/posts"
import {
  Resolver,
  ResolverTypeWrapper,
  Post,
  GetPostsQueryVariables,
  Lang,
} from "@/graphql/generated/types"

export const posts: Resolver<
  ResolverTypeWrapper<Post[]>,
  {},
  {},
  GetPostsQueryVariables
> = (_, b) => postsData[b.lang ?? Lang.Ja]
