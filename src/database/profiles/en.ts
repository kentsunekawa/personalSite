import { Profile } from "@/graphql/generated/types"

import { accounts } from "@/database/accounts"
import { skills } from "@/database/skills"
import { educationalFacilities } from "@/database/educationalFacilities/en"
import { organizations } from "@/database/organizations/en"
import { projects } from "@/database/projects"

export const profile: Profile = {
  id: "1",
  name: "Ken Tsunekawa",
  image: "/img/me.jpg",
  birthDate: "1988-05-12",
  businessTitle: "Front-End Developer / UX Engineer",
  speciality: "Web Front-End Development / Mobile App Development",
  skills,
  accounts,
  email: "k.tsunekawa.dev@gmail.com",
  educationalBackgrounds: educationalFacilities,
  workHistories: organizations,
  projects,
}
