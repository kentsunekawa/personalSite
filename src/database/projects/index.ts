import { Data } from "@/types"

export { slugs } from "./slugs"
import { Project, Lang } from "@/graphql/generated/types"
import { phr } from "./phr"
import { hcu } from "./hcu"

export const projects: Data<Project[]> = {
  [Lang.Ja]: [phr.JA, hcu.JA],
  [Lang.En]: [],
}
