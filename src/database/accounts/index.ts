import { Account } from "@/graphql/generated/types"

import { SocialMedia } from "@/graphql/generated/types"
import { SOCIAL_MEDIAS as SM } from "@/constants"

export const accounts: Account[] = [
  {
    id: SM.linkedin.name,
    name: SocialMedia.Linkedin,
    url: "https://www.linkedin.com/in/kentsunekawa/",
  },
  {
    id: SM.facebook.name,
    name: SocialMedia.Facebook,
    url: "https://www.facebook.com/profile.php?id=100005913679300",
  },
  {
    id: SM.wantedly.name,
    name: SocialMedia.Wantedly,
    url: "https://www.wantedly.com/id/kentsunekawa",
  },
  {
    id: SM.gitHub.name,
    name: SocialMedia.Github,
    url: "https://github.com/kentsunekawa",
  },
]
