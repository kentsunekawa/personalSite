import { Data } from "@/types"
import { Lang, Post } from "@/graphql/generated/types"

export { slugs } from "./slugs"
import { slugName } from "./slugName"

export const experiences: Data<Post[]> = {
  [Lang.Ja]: [slugName.JA],
  [Lang.En]: [slugName.EN],
}
