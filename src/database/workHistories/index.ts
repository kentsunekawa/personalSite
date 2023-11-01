import { Data, TypeofValue } from "@/types"
import { Lang, WorkHistory } from "@/graphql/generated/types"

import { slugs } from "./slugs"
import { alturaX } from "./alturaX"

export { slugs } from "./slugs"

export const workHistories: Data<WorkHistory[]> = {
  [Lang.Ja]: [alturaX.JA],
  [Lang.En]: [alturaX.EN],
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
