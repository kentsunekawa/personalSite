"use client"
// import from this project
import { PageState } from "@/types"
import { PageBase } from "@/components/globals/PageBase"
import { PageContent } from "@/components/parts/PageContent"

type Props = PageState & {
  companyName: string
}

export const Resume: React.FC<Props> = ({ lang, companyName }) => {
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
        {companyName}
      </PageContent>
    </PageBase>
  )
}
