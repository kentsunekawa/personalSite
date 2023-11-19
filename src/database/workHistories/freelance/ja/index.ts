import { OmitIdSlug } from "@/types"
import { WorkHistory } from "@/graphql/generated/types"

export const ja: OmitIdSlug<WorkHistory> = {
  name: "個人事業主として活動",
  period: {
    start: "2023-10-01",
  },
  summary:
    '"BEYOND SCREENS DEVELOPMENT" という屋号で、個人事業主として開業。画面上の目に見える UI 実装にとどまらず、優れたユーザー体験（UX）まで創り出せるエンジニアリングを目指している。',
}
