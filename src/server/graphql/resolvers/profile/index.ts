import { profile as profileData } from "@/server/database/profile"

import {
  Resolver,
  ResolverTypeWrapper,
  Profile,
  GetProfileQueryVariables,
  Lang,
} from "@/graphql/generated/types"

export const createProfile = ({ lang }: GetProfileQueryVariables) =>
  profileData[lang ?? Lang.Ja]

export const profile: Resolver<
  ResolverTypeWrapper<Profile>,
  {},
  {},
  GetProfileQueryVariables
> = (_, getProfileQueryVariables) => createProfile(getProfileQueryVariables)
