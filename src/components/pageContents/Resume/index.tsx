"use client"
// import from libraries
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
// import from this project
import { PageState } from "@/types"
import { Resume as ResumeType } from "@/graphql/generated/types"
import { useProfile } from "@/hooks/useProfile"
import { PageBase } from "@/components/globals/PageBase"
import { PageContent } from "@/components/parts/PageContent"
import { ResumeContents } from "@/components/parts/ResumeContents"

type Props = PageState

type Input = {
  companyName: string
  password: string
}

export const Resume: React.FC<Props> = ({ lang }) => {
  const searchParams = useSearchParams()
  const [inputs, setInputs] = useState<Input>({
    companyName: searchParams.get("companyName") ?? "",
    password: searchParams.get("password") ?? "",
  })

  const { profile } = useProfile()

  useEffect(() => {
    const companyName = searchParams.get("companyName")
    const password = searchParams.get("password")

    setInputs({
      companyName: companyName ?? "",
      password: password ?? "",
    })

    if (companyName && password) {
    }
  }, [searchParams])

  if (!profile) return null

  const Contents = ResumeContents[lang]

  return (
    <PageBase>
      <PageContent
        breadCrumsInfo={{
          lang,
          clumbs: [
            {
              pageName: "home",
            },
            {
              isCurrent: true,
              pageName: "resume",
            },
          ],
        }}
      >
        {/* <Contents profile={profile} resume={resume} /> */}
      </PageContent>
    </PageBase>
  )
}
