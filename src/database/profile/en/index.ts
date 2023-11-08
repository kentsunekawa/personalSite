import { Profile } from "@/graphql/generated/types"

import { accounts } from "@/database/accounts"
import { getSkills } from "@/database/skills"
import { educationalBackgrounds } from "@/database/educationalBackgrounds"
import { getWorkHistories } from "@/database/workHistories"
import { projects } from "@/database/projects"
import message from "./message.md"

export const en: Profile = {
  id: "profile_en",
  name: "Ken Tsunekawa",
  image: "/img/me.jpg",
  birthDate: "1988-05-12",
  accounts,
  email: "k.tsunekawa.dev@gmail.com",
  businessTitle: "Front-End Developer / UX Engineer",
  speciality: "Web Front-End Development / Mobile App Development",
  skills: getSkills(),
  educationalBackgrounds: educationalBackgrounds.EN,
  workHistories: getWorkHistories("EN"),
  projects: projects.EN,
  message,
}