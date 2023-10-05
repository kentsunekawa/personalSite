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
> = (_, b) => profiles[b.lang ?? Lang.Ja]
