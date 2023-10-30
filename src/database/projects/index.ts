import { Data } from "@/types"

export { slugs } from "./slugs"
import { Project, Lang } from "@/graphql/generated/types"
import { phr } from "./phr"

export const projects: Data<Project[]> = {
  [Lang.Ja]: [phr.JA],
  [Lang.En]: [phr.EN],
}
