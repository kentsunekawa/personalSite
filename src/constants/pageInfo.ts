import { Lang } from "@/graphql/generated/types"

export type PageName =
  | "home"
  | "profile"
  | "experiences"
  | "experience"
  | "projects"

export type PageInfo = {
  path: string
  displayName: string
  createPath: (
    lang: Lang,
    params?: {
      [k: string]: string
    }
  ) => string
}

export type PagesInfo = {
  [k in PageName]: PageInfo
}

const checkLang = (lang?: Lang) => (!lang || lang === Lang.Ja ? "" : "en")

// テンプレート置換
export const strFormat = (
  template: string,
  replacement: {
    [k: string]: string | number
  },
  regex = /\{(.+?)\}/g
): string =>
  template.replace(regex, (m: string, c: string) =>
    replacement[c] !== null && replacement[c] !== undefined
      ? replacement[c].toString()
      : m
  )

// PAGES_INFO の変数置換
export const createUrl = (
  path: string,
  replacement?: {
    [k: string]: string
  }
): string =>
  replacement ? strFormat(path, replacement, /:([^/]+)($|(?=\/))/g) : path

export const PAGES_INFO: PagesInfo = {
  home: {
    path: "/",
    displayName: "Home",
    createPath(lang = Lang.Ja) {
      return `${PAGES_INFO.home.path}${checkLang(lang)}`
    },
  },
  profile: {
    path: "/profile",
    displayName: "Profile",
    createPath(lang = Lang.Ja) {
      return `${PAGES_INFO.profile.path}/${checkLang(lang)}`
    },
  },
  projects: {
    path: "/projects",
    displayName: "Projects",
    createPath(lang = Lang.Ja) {
      return `${PAGES_INFO.projects.path}/${checkLang(lang)}`
    },
  },
  experiences: {
    path: "/experiences",
    displayName: "Experiences",
    createPath(lang = Lang.Ja) {
      return `${PAGES_INFO.experiences.path}/${checkLang(lang)}`
    },
  },
  experience: {
    path: "/experiences/:slug",
    displayName: "Experience",
    createPath(lang = Lang.Ja, params) {
      return `${createUrl(PAGES_INFO.experience.path, params)}/${checkLang(
        lang
      )}`
    },
  },
}
