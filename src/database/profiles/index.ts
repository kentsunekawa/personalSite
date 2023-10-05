import { Data } from "@/types"
import { Lang, Profile } from "@/graphql/generated/types"

import { profile as en } from "./en"
import { profile as ja } from "./ja"

export const profiles: Data<Profile> = {
  [Lang.Ja]: ja,
  [Lang.En]: en,
}
