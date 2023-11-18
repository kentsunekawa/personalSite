import { OmitIdSlug } from "@/types"
import { WorkHistory, EmploymentType } from "@/graphql/generated/types"
import description from "./description.md"

export const ja: OmitIdSlug<WorkHistory> = {
  name: "nosh 株式会社",
  period: {
    start: "2020-10-01",
    end: "2021-01-31",
  },
  employmentType: EmploymentType.Fulltime,
  position: "マークアップエンジニア / フロントエンドエンジニア",
  // description,
}
