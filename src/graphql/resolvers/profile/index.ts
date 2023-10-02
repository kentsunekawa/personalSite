import { profiles } from "@/database/profiles"

import {
  Resolver,
  ResolverTypeWrapper,
  Profile,
  GetProfileQueryVariables,
  Lang,
} from "@/graphql/generated/types"

export const profile: Resolver<
  ResolverTypeWrapper<Profile>,
  {},
  {},
  GetProfileQueryVariables
> = (a, b, c, d) => {
  console.log(b.lang)

  return b.lang === Lang.En ? profiles.en : profiles.ja
}
