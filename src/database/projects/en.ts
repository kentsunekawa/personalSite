import { Project } from "@/graphql/generated/types"
import { organizations } from "@/database/organizations/ja"

import { skills } from "@/database/skills"

export const projects: Project[] = [
  {
    id: "phr",
    title: "Developing PHR application",
    belonging: organizations.filter(({ id }) => id === "alturaX")[0],
    period: {
      start: "2022-03-01",
    },
    position: "Mobile Application Engineer",
    responsibility: "Engineer",
    team: "PdM 1 名 / Back-End Engineer 4 ~ 9 名 / Front-End Engineer 2 ~ 4 名",
    technologies: [],
  },
]
