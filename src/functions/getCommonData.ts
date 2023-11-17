import { Lang, Profile } from "@/graphql/generated/types"
import { getProfile } from "./getProfile"

export const getCommonData = async (lang: Lang) => {
  const [profile] = await Promise.all([
    new Promise<Profile>((resolve) =>
      getProfile(lang).then(({ data }) => resolve(data.profile))
    ),
  ])

  return {
    profile,
  }
}
