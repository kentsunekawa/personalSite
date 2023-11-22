import { OmitIdSlug } from "@/types"
import { WorkHistory, EmploymentType } from "@/graphql/generated/types"
// import description from "./description.md"

export const ja: OmitIdSlug<WorkHistory> = {
  name: "株式会社INE",
  period: {
    start: "2018-01-15",
    end: "2020-09-30",
  },
  employmentType: EmploymentType.Fulltime,
  position: "HTML コーダー / マークアップエンジニア",
  summary:
    "シャンプーや化粧品などの生活雑貨の企画・開発・販売している企業で、オンライン上でのマーケティングが強み。EC 部門のクリエイティブチームで Web 制作関連のコーディングを担当。",
  // description
}
