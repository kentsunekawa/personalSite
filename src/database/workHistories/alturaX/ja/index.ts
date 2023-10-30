import { OmitIdSlug } from "@/types"
import { WorkHistory, EmploymentType } from "@/graphql/generated/types"
import description from "./description.md"

export const ja: OmitIdSlug<WorkHistory> = {
  name: "ALTURA X 株式会社",
  period: {
    start: "2023-01-01",
  },
  employmentType: EmploymentType.Fulltime,
  position: "フロントエンドエンジニア",
  description,
}
