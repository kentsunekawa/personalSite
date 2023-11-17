import { SocialMedia } from "@/graphql/generated/types"

export const SOCIAL_MEDIAS = {
  facebook: {
    name: SocialMedia.Facebook,
    displayName: "Facebook",
  },
  linkedin: {
    name: SocialMedia.Linkedin,
    displayName: "Linkedin",
  },
  wantedly: {
    name: SocialMedia.Wantedly,
    displayName: "Facebook",
  },
  instagram: {
    name: SocialMedia.Instagram,
    displayName: "Instagram",
  },
  gitHub: {
    name: SocialMedia.Github,
    displayName: "GitHub",
  },
} as const
