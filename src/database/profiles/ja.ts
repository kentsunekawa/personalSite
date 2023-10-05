import { Profile } from "@/graphql/generated/types"

import { accounts } from "@/database/accounts"
import { skills } from "@/database/skills"
import { educationalFacilities } from "@/database/educationalFacilities/ja"
import { organizations } from "@/database/organizations/ja"
import { projects } from "@/database/projects/ja"

export const profile: Profile = {
  id: "1",
  name: "常川 健",
  image: "/img/me.jpg",
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
