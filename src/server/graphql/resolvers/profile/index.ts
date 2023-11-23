import { profile as profileData } from "@/server/database/profile"

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
> = (_, b) => profileData[b.lang ?? Lang.Ja]
