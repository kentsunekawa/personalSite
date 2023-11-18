import { Lang, LangLevel, EmploymentType } from "@/graphql/generated/types"

export const CONTENTS = {
  [Lang.Ja]: {
    language: {
      [Lang.Ja]: "日本語",
      [Lang.En]: "英語",
    },
    LangLevel: {
      [LangLevel.Native]: "ネイティブ",
      [LangLevel.Business]: "ビジネスレベル",
      [LangLevel.Daily]: "日常会話",
    },
    employmentType: {
      [EmploymentType.Fulltime]: "正社員",
    },
  },
  [Lang.En]: {
    language: {
      [Lang.Ja]: "Japanese",
      [Lang.En]: "English",
    },
    LangLevel: {
      [LangLevel.Native]: "Native",
      [LangLevel.Business]: "Business",
      [LangLevel.Daily]: "Daily conversation",
    },
    employmentType: {
      [EmploymentType.Fulltime]: "Fulltime",
    },
  },
} as const
