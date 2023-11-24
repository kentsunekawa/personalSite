import { OmitIdSlug } from "@/types"
import { WorkHistory } from "@/graphql/generated/types"

export const ja: OmitIdSlug<WorkHistory> = {
  name: "個人事業主として活動",
  period: {
    start: "2023-10-01",
  },
  summary:
    '個人事業主として活動開始（屋号: "BEYOND SCREENS DEVELOPMENT"）。画面上の目に見える UI 実装だけではなく、優れたユーザー体験（UX）を創り出せるエンジニアリングを目指す。',
}
