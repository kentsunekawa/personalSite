import { OmitIdSlug } from "@/types"
import { WorkHistory, EmploymentType } from "@/graphql/generated/types"
import description from "./description.md"

export const ja: OmitIdSlug<WorkHistory> = {
  name: "リンクオブマインド株式会社",
  period: {
    start: "2016-06-01",
    end: "2017-11-30",
  },
  employmentType: EmploymentType.Fulltime,
  position: "Web デザイナー / マークアップエンジニア",
  summary:
    " 航空券や高速バス乗車券、オプショナルツアーを自社で開発・運営する Web サイトにて代理販売。Web デザイナーとして、デザインからコーディングまで担当。",
  // description,
}
