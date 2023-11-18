import { OmitIdSlug } from "@/types"
import { WorkHistory, EmploymentType } from "@/graphql/generated/types"
import description from "./description.md"

export const en: OmitIdSlug<WorkHistory> = {
  name: "ALTURA X.Inc",
  period: {
    start: "2023-01-01",
  },
  employmentType: EmploymentType.Fulltime,
  position: "Front-End Developer",
  description,
}
