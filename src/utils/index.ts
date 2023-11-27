import { Lang } from "@/graphql/generated/types"
import { PAGES_INFO, IMAGE_PATHS, PageName } from "@/constants"

export const getPageInfo = (pageName: PageName) => PAGES_INFO[pageName]

export const formatDateString = (dateString: string, lang: Lang) => {
  switch (lang) {
    case "EN":
      return dateString.replaceAll("-", ".")
    default:
      const [year, month, date] = dateString.split("-")
      return `${year}年${month}月${date}日`
  }
}

export const geTechnologyImagePath = (slug: string) =>
  //@ts-ignore
  IMAGE_PATHS.technologies[slug] ?? IMAGE_PATHS.technologies.noImage

export const convertCookieString = (
  cookieString: string
): {
  [k: string]: string
} =>
  cookieString
    .split(";")
    .map((item) => item.split("="))
    // @ts-ignore
    .reduce((acc, [k, v]) => (acc[k.trim().replace('"', "")] = v) && acc, {})
