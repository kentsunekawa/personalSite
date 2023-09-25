import { Profile } from "@/graphql/generated/types"

import { accounts } from "@/database/accounts"
import { skills } from "@/database/skills"
import { educationalFacilities } from "@/database/educationalFacilities"
import { organizations } from "@/database/organizations"
import { projects } from "@/database/projects"

export const profile: Profile = {
  id: "1",
  name: "常川 健",
  birthDate: "1988-05-12",
  businessTitle: "フロントエンドエンジニア / UI エンジニア",
  speciality: "WEB フロントエンド開発 / スマートフォンアプリ開発",
  skills,
  accounts,
  email: "k.tsunekawa.dev@gmail.com",
  educationalBackgrounds: educationalFacilities,
  workHistories: organizations,
  projects,
}
