import { Data, TypeofValue } from "@/types"
import { Lang, WorkHistory } from "@/graphql/generated/types"

import { slugs } from "./slugs"
import { linkOfMind } from "./linkOfMind"
import { ine } from "./ine"
import { nosh } from "./nosh"
import { alturaX } from "./alturaX"

export { slugs } from "./slugs"

export const workHistories: Data<WorkHistory[]> = {
  [Lang.Ja]: [alturaX.JA, nosh.JA, ine.JA, linkOfMind.JA],
  [Lang.En]: [],
}

export const getWorkHistory = (
  lang: Lang,
  targetSlug: TypeofValue<typeof slugs>
) => workHistories[lang].find(({ slug }) => slug === targetSlug)

export const getWorkHistories = (
  lang: Lang,
  targetSlugs?: TypeofValue<typeof slugs>[]
) =>
  targetSlugs
    ? workHistories[lang].filter(({ slug }) =>
        targetSlugs.includes(slug as TypeofValue<typeof slugs>)
      )
    : workHistories[lang]
