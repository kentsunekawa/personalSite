import { Lang } from "@/graphql/generated/types"

export type Data<T> = {
  [Lang.Ja]: T
  [Lang.En]: T
}
