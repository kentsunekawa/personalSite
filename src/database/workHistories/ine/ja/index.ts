import { OmitIdSlug } from "@/types"
import { WorkHistory, EmploymentType } from "@/graphql/generated/types"
import description from "./description.md"

export const ja: OmitIdSlug<WorkHistory> = {
  name: "株式会社INE",
  period: {
    start: "2018-01-15",
    end: "2020-09-30",
  },
  employmentType: EmploymentType.Fulltime,
  position: "HTML コーダー / マークアップエンジニア",
  // description,
}
