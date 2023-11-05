import { Data } from "@/types"
import { Lang, Post } from "@/graphql/generated/types"
import { createPostCommonData } from "@/functions/createPostCommonData"

import { slugs } from "../slugs"
import { ja } from "./ja"

const commonData = createPostCommonData(slugs.slugName)

export const hogehoge: { [Lang.Ja]: Post } = {
  [Lang.Ja]: {
    ...commonData.JA,
    ...ja,
  },
}
