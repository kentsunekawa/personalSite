"use client"
import { Lang, Profile as ProfileType } from "@/graphql/generated/types"

import { PageBase } from "@/components/globals/PageBase"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"

type Props = {
  lang?: Lang
  profile: ProfileType
}

export const Profile: React.FC<Props> = ({ lang = Lang.Ja, profile }) => {
  return (
    <PageBase>
      {profile.name}
      <div>
        {profile.message && (
          <MarkdownDisplay>{profile.message}</MarkdownDisplay>
        )}
      </div>
    </PageBase>
  )
}
