import { experiences } from "@/database/experiences"
import {
  Resolver,
  ResolverTypeWrapper,
  Post,
  GetPostsQueryVariables,
  Lang,
} from "@/graphql/generated/types"

export const posts: Resolver<
  ResolverTypeWrapper<Post>[],
  {},
  {},
  GetPostsQueryVariables
> = (_, { lang }) => experiences[lang ?? Lang.Ja]
