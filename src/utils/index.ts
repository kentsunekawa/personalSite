import { PAGE_INFO, PageName, PageInfo } from "@/constants"

export const getPageInfo = (pageName: PageName) => PAGE_INFO[pageName]

export const formatDateString = (dateString: string) =>
  dateString.replaceAll("-", ".")
