import { Lang, LangLevel, Profile } from "@/graphql/generated/types"

import { accounts } from "@/database/accounts"
import { getSkills } from "@/database/skills"
import { educationalBackgrounds } from "@/database/educationalBackgrounds"
import { getWorkHistories } from "@/database/workHistories"
import { projects } from "@/database/projects"
import message from "./message.md"
import introduction from "./introduction.md"

export const en: Profile = {
  id: "profile_en",
  name: "Ken Tsunekawa",
  image: "/img/me.jpg",
  birthDate: "1988-05-12",
  place: "Osaka, Japan",
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
  speciality: "Web Front-End Development / Mobile App Development",
  skills: getSkills(),
  educationalBackgrounds: educationalBackgrounds.EN,
  workHistories: getWorkHistories("EN"),
  projects: projects.EN,
  message,
  introduction,
}
