import { Lang } from "@/graphql/generated/types"

export type PageName =
  | "home"
  | "profile"
  | "experiences"
  | "experience"
  | "projects"

export type PageInfo = {
  [k in PageName]: {
    path: string
    createPath: (
      lang?: Lang,
      pathInfo?: {
        [k: string]: string
      }
    ) => string
  }
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

// PAGE_INFO の変数置換
export const createUrl = (
  path: string,
  replacement?: {
    [k: string]: string
  }
): string =>
  replacement ? strFormat(path, replacement, /:([^/]+)($|(?=\/))/g) : path

export const PAGE_INFO: PageInfo = {
  home: {
    path: "/",
    createPath(lang = Lang.Ja) {
      return `${this.path}${checkLang(lang)}`
    },
  },
  profile: {
    path: "/profile",
    createPath(lang = Lang.Ja) {
      return `${this.path}/${checkLang(lang)}`
    },
  },
  experiences: {
    path: "/experiences",
    createPath(lang = Lang.Ja) {
      return `${this.path}/${checkLang(lang)}`
    },
  },
  experience: {
    path: "/experiences/:slug",
    createPath(lang = Lang.Ja, pathInfo) {
      return `${createUrl(this.path, pathInfo)}/${checkLang(lang)}`
    },
  },
  projects: {
    path: "/projects",
    createPath(lang = Lang.Ja) {
      return `${this.path}/${checkLang(lang)}`
    },
  },
}
