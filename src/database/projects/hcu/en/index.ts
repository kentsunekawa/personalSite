import { OmitIdSlug } from "@/types"
import { Project } from "@/graphql/generated/types"
import { getWorkHistory } from "@/database/workHistories"
import { getSkills } from "@/database/skills"
import description from "./description.md"

export const en: OmitIdSlug<Project> = {
  title: "Developing HCU web application",
  belonging: getWorkHistory("EN", "alturaX"),
  period: {
    start: "2022-03-01",
  },
  position: "Mobile Application Engineer",
  responsibility: "Engineer",
  team: "PdM 1 名 / Back-End Engineer 4 ~ 9 名 / Front-End Engineer 2 ~ 4 名",
  technologies: getSkills(["react", "reactNative", "typescript"]),
  description,
}
