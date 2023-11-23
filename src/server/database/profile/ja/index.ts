import { Lang, LangLevel, Profile } from "@/graphql/generated/types"

import { accounts } from "@/server/database/accounts"
import { getSkills } from "@/server/database/skills"
import { educationalBackgrounds } from "@/server/database/educationalBackgrounds"
import { getWorkHistories } from "@/server/database/workHistories"
import { projects } from "@/server/database/projects"
import message from "./message.md"
import introduction from "./introduction.md"

export const ja: Profile = {
  id: "profile_ja",
  name: "常川 健",
  subName: "Ken Tsunekawa",
  // image: "/img/me.jpg",
  birthDate: "1988-05-12",
  place: "大阪",
  languages: [
    {
      lang: Lang.Ja,
      level: LangLevel.Native,
    },
    {
      lang: Lang.En,
      level: LangLevel.Daily,
    },
  ],
  accounts,
  email: "k.tsunekawa.dev@gmail.com",
  businessTitle: "Front-End Developer / UX Engineer",
  speciality: "WEB フロントエンド開発 / スマートフォンアプリ開発",
  skills: getSkills(),
  educationalBackgrounds: educationalBackgrounds.JA,
  workHistories: getWorkHistories("JA"),
  projects: projects.JA,
  message,
  introduction,
}
