import { PageName } from "@/constants"
import { Lang } from "@/graphql/generated/types"

export type Data<T> = {
  [Lang.Ja]: T
  [Lang.En]: T
}

export type OmitIdSlug<T> = Omit<T, "id" | "slug">

export type TypeofValue<T> = T[keyof T]

export type PageState = {
  pageName: PageName
  lang: Lang
  translatedLangs: {
    [k in Lang]: boolean
  }
}
