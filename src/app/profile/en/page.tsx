import { NextPage } from "next"

import { Lang } from "@/graphql/generated/types"
import { getProfile } from "@/functions/getProfile"
import { Profile } from "@/components/pageContents/Profile"

const Page: NextPage = async () => {
  const { data: profileData } = await getProfile(Lang.En)

  return <Profile profile={profileData.profile} lang={Lang.En} />
}

export default Page
