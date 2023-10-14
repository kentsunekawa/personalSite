import { NextPage } from "next"

import { getProfile } from "@/functions/getProfile"
import { Profile } from "@/components/pageContents/Profile"

const Page: NextPage = async () => {
  const { data: profileData } = await getProfile()

  return <Profile profile={profileData.profile} />
}

export default Page
