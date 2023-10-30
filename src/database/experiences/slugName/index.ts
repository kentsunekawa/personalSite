import { Data } from "@/types"
import { Lang, Post } from "@/graphql/generated/types"
import { createPostCommonData } from "@/functions/createPostCommonData"

import { slugs } from "../slugs"
import { ja } from "./ja"
import { en } from "./en"

const commonData = createPostCommonData(slugs.slugName)

export const slugName: Data<Post> = {
  [Lang.Ja]: {
    ...commonData.JA,
    ...ja,
  },
  [Lang.En]: {
    ...commonData.EN,
    ...en,
  },
}
