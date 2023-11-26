"use client"
// import from this project
import { PageState } from "@/types"
import { Resume as ResumeType } from "@/graphql/generated/types"
import { useProfile } from "@/hooks/useProfile"
import { PageBase } from "@/components/globals/PageBase"
import { PageContent } from "@/components/parts/PageContent"
import { ResumeContents } from "@/components/parts/ResumeContents"

type Props = PageState & {
  companyName: string
  resume: ResumeType
}

export const Resume: React.FC<Props> = ({ lang, companyName, resume }) => {
  const { profile } = useProfile()

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
        <Contents profile={profile} resume={resume} />
      </PageContent>
    </PageBase>
  )
}
