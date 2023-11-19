import { Data } from "@/types"
import { Lang, Project } from "@/graphql/generated/types"
import { createPostCommonData } from "@/functions/createPostCommonData"

import { slugs } from "../slugs"
import { ja } from "./ja"
import { en } from "./en"

const commonData = createPostCommonData(slugs.alolink)

export const alolink: Data<Project> = {
  [Lang.Ja]: {
    ...commonData.JA,
    ...ja,
  },
  [Lang.En]: {
    ...commonData.EN,
    ...en,
  },
}
