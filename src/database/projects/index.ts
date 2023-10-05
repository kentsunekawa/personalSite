import { Data } from "@/types"

import { Project, Lang } from "@/graphql/generated/types"

import { projects as ja } from "./ja"
import { projects as en } from "./en"

export const projects: Data<Project[]> = {
  [Lang.Ja]: ja,
  [Lang.En]: en,
}
