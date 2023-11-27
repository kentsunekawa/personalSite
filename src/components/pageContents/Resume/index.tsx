"use client"
// import from libraries
import { useState, useEffect, useCallback, useMemo } from "react"
import { useSearchParams } from "next/navigation"
// import from this project
import { PageState } from "@/types"
import {
  Resume as ResumeType,
  useGetResumeLazyQuery,
} from "@/graphql/generated/types"
import { useProfile } from "@/hooks/useProfile"
import { PageBase } from "@/components/globals/PageBase"
import { PageContent } from "@/components/parts/PageContent"
import { ResumeContents } from "@/components/parts/ResumeContents"
import { InputContents } from "./InputContents"

type Props = PageState

type Input = {
  companyName: string
  password: string
}

export const Resume: React.FC<Props> = ({ lang }) => {
  const searchParams = useSearchParams()
  const [initCheck, setInitCheck] = useState<boolean>(false)
  const [inputs, setInputs] = useState<Input>({
    companyName: searchParams.get("companyName") ?? "",
    password: searchParams.get("password") ?? "",
  })

  const [getResume, { data, error, loading }] = useGetResumeLazyQuery()
  const { profile } = useProfile()

  const doGetResume = useCallback(() => {
    document.cookie = `companyName=${inputs.companyName}`
    document.cookie = `password=${inputs.password}`
    getResume({
      variables: {
        lang,
      },
    })
  }, [getResume, inputs.companyName, inputs.password, lang])

  useEffect(() => {
    if (!initCheck) {
      setInitCheck(true)
      const companyName = searchParams.get("companyName")
      const password = searchParams.get("password")

      setInputs({
        companyName: companyName ?? "",
        password: password ?? "",
      })

      if (companyName && password) {
        doGetResume()
      }
    }
  }, [doGetResume, searchParams, initCheck])

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
        <InputContents
          inputs={inputs}
          onChange={(name, value) => {
            setInputs((prev) => ({
              ...prev,
              [name]: value,
            }))
          }}
          onSubmit={doGetResume}
        />
        {data?.resume && <Contents profile={profile} resume={data.resume} />}
      </PageContent>
    </PageBase>
  )
}
