import { Data } from "@/types"
import { Lang, Organization } from "@/graphql/generated/types"

import { organizations as ja } from "./ja"
import { organizations as en } from "./en"

export const organizations: Data<Organization[]> = {
  [Lang.Ja]: ja,
  [Lang.En]: en,
}
