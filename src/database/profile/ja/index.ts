import { Profile } from "@/graphql/generated/types"

import { accounts } from "@/database/accounts"
import { getSkills } from "@/database/skills"
import { educationalBackgrounds } from "@/database/educationalBackgrounds"
import { getWorkHistories } from "@/database/workHistories"
import { projects } from "@/database/projects"
import message from "./message.md"

export const ja: Profile = {
  id: "profile_ja",
  name: "常川 健",
  image: "/img/me.jpg",
  birthDate: "1988-05-12",
  accounts,
  email: "k.tsunekawa.dev@gmail.com",
  businessTitle: "Front-End Developer / UX Engineer",
  speciality: "WEB フロントエンド開発 / スマートフォンアプリ開発",
  skills: getSkills(),
  educationalBackgrounds: educationalBackgrounds.JA,
  workHistories: getWorkHistories("JA"),
  projects: projects.JA,
  message,
}
