import { Data } from "@/types"
import { Lang, Post } from "@/graphql/generated/types"

import { slugName } from "./slugName"

export const experiences: Data<Post[]> = {
  [Lang.Ja]: [slugName[Lang.Ja]],
  [Lang.En]: [slugName[Lang.En]],
}
