import { Profile } from "@/graphql/generated/types"

import { accounts } from "@/database/accounts"
import { skills } from "@/database/skills"
import { educationalBackgrounds } from "@/database/educationalBackgrounds/en"
import { workHistories } from "@/database/workHistories"
import { projects } from "@/database/projects"
import message from "./message.md"

export const profile: Profile = {
  id: "1",
  name: "Ken Tsunekawa",
  image: "/img/me.jpg",
  birthDate: "1988-05-12",
  accounts,
  email: "k.tsunekawa.dev@gmail.com",
  businessTitle: "Front-End Developer / UX Engineer",
  speciality: "Web Front-End Development / Mobile App Development",
  skills,
  educationalBackgrounds,
  workHistories: workHistories.EN,
  projects: projects.EN,
  message,
}
