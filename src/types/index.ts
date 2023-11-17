import { PageName } from "@/constants"
import { Lang } from "@/graphql/generated/types"
import { RuleSet } from "styled-components"

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
  params?: {
    [k: string]: string
  }
}

export type Css = RuleSet<object>

export type InsertStyles<T extends string> = {
  [k in T]?: Css
}
