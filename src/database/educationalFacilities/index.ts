import { Data } from "@/types"
import { Lang, EducationalFacility } from "@/graphql/generated/types"
import { educationalFacilities as en } from "./en"
import { educationalFacilities as ja } from "./ja"

export const educationalFacilities: Data<EducationalFacility[]> = {
  [Lang.Ja]: ja,
  [Lang.En]: en,
}
