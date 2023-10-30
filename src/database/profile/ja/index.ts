import { Profile } from "@/graphql/generated/types"

import { accounts } from "@/database/accounts"
import { skills } from "@/database/skills"
import { educationalBackgrounds } from "@/database/educationalBackgrounds/ja"
import { workHistories } from "@/database/workHistories"
import { projects } from "@/database/projects"
import message from "./message.md"

export const profile: Profile = {
  id: "profile_ja",
  name: "常川 健",
  image: "/img/me.jpg",
  birthDate: "1988-05-12",
  accounts,
  email: "k.tsunekawa.dev@gmail.com",
  businessTitle: "フロントエンドエンジニア / UI エンジニア",
  speciality: "WEB フロントエンド開発 / スマートフォンアプリ開発",
  skills,
  educationalBackgrounds,
  workHistories: workHistories.JA,
  projects: projects.JA,
  message,
}
