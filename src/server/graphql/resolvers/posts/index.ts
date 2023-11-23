import { experiences } from "@/server/database/experiences"
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
> = (_, { lang, searchPostsInput }) => {
  const inputedStatus = searchPostsInput?.status
  const inputedLabels = searchPostsInput?.labels
  return experiences[lang ?? Lang.Ja]
    .filter(
      ({ status }) =>
        !inputedStatus ||
        inputedStatus.length === 0 ||
        inputedStatus.includes(status)
    )
    .filter(
      ({ labels }) =>
        !inputedLabels ||
        inputedLabels.length === 0 ||
        labels.some((label) => inputedLabels.includes(label))
    )
}
