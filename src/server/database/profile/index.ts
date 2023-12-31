import { Data } from "@/types"
import { Lang, Profile } from "@/graphql/generated/types"

import { en } from "./en"
import { ja } from "./ja"

export const profile: Data<Profile> = {
  [Lang.Ja]: ja,
  [Lang.En]: en,
}
