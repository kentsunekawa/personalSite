import { Data } from "@/types"

export { slugs } from "./slugs"
import { Project, Lang } from "@/graphql/generated/types"
import { phr } from "./phr"
import { hcu } from "./hcu"
import { alolink } from "./alolink"
import { botanist } from "./botanist"
import { salonia } from "./salonia"

export const projects: Data<Project[]> = {
  [Lang.Ja]: [phr.JA, hcu.JA, alolink.JA, salonia.JA, botanist.JA],
  [Lang.En]: [],
}
