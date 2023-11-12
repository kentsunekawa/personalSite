import { Lang } from "@/graphql/generated/types"
import { PAGE_INFO, PageName } from "@/constants"

export const getPageInfo = (pageName: PageName) => PAGE_INFO[pageName]

export const formatDateString = (dateString: string, lang: Lang) => {
  switch (lang) {
    case "EN":
      return dateString.replaceAll("-", ".")
    default:
      const [year, month, date] = dateString.split("-")
      return `${year}年${month}月${date}日`
  }
}
