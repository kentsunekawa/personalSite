import { Data } from "@/types"
import { Lang, WorkHistory } from "@/graphql/generated/types"

import { createPostCommonData } from "@/functions/createPostCommonData"
import { slugs } from "../slugs"
import { en } from "./en"
import { ja } from "./ja"

const commonData = createPostCommonData(slugs.linkOfMind)

export const linkOfMind: Data<WorkHistory> = {
  [Lang.Ja]: {
    ...commonData.JA,
    ...ja,
  },
  [Lang.En]: {
    ...commonData.EN,
    ...en,
  },
}
