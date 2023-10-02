import { Organization, EmploymentType } from "@/graphql/generated/types"

export const organizations: Organization[] = [
  {
    id: "alturaX",
    name: "ALTURA X.Inc",
    period: {
      start: "2023-01-01",
    },
    employmentType: EmploymentType.Fulltime,
    position: "Front-End Developer",
  },
]
