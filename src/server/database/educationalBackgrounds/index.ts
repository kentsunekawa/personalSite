import { Data } from "@/types"
import { Lang, EducationalBackground } from "@/graphql/generated/types"
import { en } from "./en"
import { ja } from "./ja"

export const educationalBackgrounds: Data<EducationalBackground[]> = {
  [Lang.Ja]: ja,
  [Lang.En]: en,
}
