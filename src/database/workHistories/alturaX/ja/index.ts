import { OmitIdSlug } from "@/types"
import { WorkHistory, EmploymentType } from "@/graphql/generated/types"
import description from "./description.md"

export const ja: OmitIdSlug<WorkHistory> = {
  name: "ALTURA X 株式会社",
  period: {
    start: "2021-06-01",
    end: "2023-09-30",
  },
  employmentType: EmploymentType.Fulltime,
  position:
    "フロントエンドエンジニア / モバイルアプリエンジニア / フロントエンドチームリーダー",
  // description,
}
