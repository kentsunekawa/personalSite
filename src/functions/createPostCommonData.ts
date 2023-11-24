import { Lang } from "@/graphql/generated/types"

export const createPostCommonData = (slug: string) => ({
  [Lang.Ja]: {
    id: `${slug}_ja`,
    slug,
  },
  [Lang.En]: {
    id: `${slug}_en`,
    slug,
  },
})
