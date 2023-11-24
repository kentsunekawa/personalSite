import { experiences } from "@/server/database/experiences"
import {
  Resolver,
  ResolverTypeWrapper,
  Post,
  GetPostQueryVariables,
  Lang,
} from "@/graphql/generated/types"

export const createPost = ({ lang, slug }: GetPostQueryVariables) =>
  experiences[lang ?? Lang.Ja].filter(
    (experience) => experience.slug === slug
  )[0]

export const post: Resolver<
  ResolverTypeWrapper<Post>,
  {},
  {},
  GetPostQueryVariables
> = (_, getPostQueryVariables) => createPost(getPostQueryVariables)
