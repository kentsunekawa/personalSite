import { Lang, Post, PostLabel, PostStatus } from "@/graphql/generated/types"
import { createPostCommonData } from "@/functions/createPostCommonData"
import { ja } from "./ja"
import { en } from "./en"

const slug = "slugName"
const commonData = createPostCommonData(slug)

export const slugName: {
  [Lang.Ja]: Post
  [Lang.En]: Post
} = {
  [Lang.Ja]: {
    ...commonData.JA,
    ...ja,
  },
  [Lang.En]: {
    ...commonData.EN,
    ...en,
  },
}
