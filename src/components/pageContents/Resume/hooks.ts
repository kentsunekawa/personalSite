// import from libraries
import { useCallback } from "react"

// import from this project
import { Lang, useGetResumeLazyQuery } from "@/graphql/generated/types"

export const useGetResume = (lang: Lang) => {
  const [getResumt, { data, error, loading }] = useGetResumeLazyQuery()

  const doGetResume = useCallback(() => {
    void getResumt({
      variables: {
        lang,
      },
    })
  }, [getResumt, lang])

  return { doGetResume }
}
