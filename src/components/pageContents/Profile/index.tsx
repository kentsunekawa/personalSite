import { Lang, Profile as ProfileType } from "@/graphql/generated/types"

import { PageBase } from "@/components/globals/PageBase"

type Props = {
  lang?: Lang
  profile: ProfileType
}

export const Profile: React.FC<Props> = ({ lang = Lang.Ja, profile }) => {
  return <PageBase>{profile.name}</PageBase>
}
