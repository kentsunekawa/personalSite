import { NextPage } from "next"

import { PageBase } from "@/components/globals/PageBase"

type Props = {
  params: {
    id: string
  }
}

const Page: NextPage<Props> = async ({ params: { id } }) => {
  return (
    <PageBase>
      <h1>fdoiafj</h1>
    </PageBase>
  )
}

export default Page
