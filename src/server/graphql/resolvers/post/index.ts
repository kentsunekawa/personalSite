import { experiences } from "@/server/database/experiences"
import {
  Resolver,
  ResolverTypeWrapper,
  Post,
  GetPostQueryVariables,
  Lang,
} from "@/graphql/generated/types"

export const post: Resolver<
  ResolverTypeWrapper<Post>,
  {},
  {},
  GetPostQueryVariables
> = (_, { slug, lang }) =>
  experiences[lang ?? Lang.Ja].filter(
    (experience) => experience.slug === slug
  )[0]
