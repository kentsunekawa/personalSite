import { NextPage } from "next"

import { getProfile } from "@/functions/getProfile"
import { PageBase } from "@/components/globals/PageBase"

const Page: NextPage = async () => {
  const { data: profileData } = await getProfile()

  console.log(profileData)

  return (
    <PageBase>
      <section>hogehe</section>
    </PageBase>
  )
}

export default Page
