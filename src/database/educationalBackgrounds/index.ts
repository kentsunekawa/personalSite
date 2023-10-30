import { Data } from "@/types"
import { Lang, EducationalBackground } from "@/graphql/generated/types"
import { educationalBackgrounds as en } from "./en"
import { educationalBackgrounds as ja } from "./ja"

export const educationalBackgrounds: Data<EducationalBackground[]> = {
  [Lang.Ja]: ja,
  [Lang.En]: en,
}
