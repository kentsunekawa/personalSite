import { Lang } from '@/graphql/generated/types'
import { PAGES_INFO, IMAGE_PATHS, PageName } from '@/constants'

export const getPageInfo = (pageName: PageName) => PAGES_INFO[pageName]

export const formatDateString = (
  dateString: string,
  lang: Lang,
  withDate = true,
) => {
  switch (lang) {
    case 'EN':
      return dateString.replaceAll('-', '.')
    default:
      const [year, month, date] = dateString.split('-')
      return `${year}年${month}月${withDate ? `${date}日` : ''}`
  }
}

export const geTechnologyImagePath = (slug: string) =>
  //@ts-ignore
  IMAGE_PATHS.technologies[slug] ?? IMAGE_PATHS.technologies.noImage

export const convertCookieString = (
  cookieString: string,
): {
  [k: string]: string
} =>
  cookieString
    .split(';')
    .map((item) => item.split('='))
    // @ts-ignore
    .reduce((acc, [k, v]) => (acc[k.trim().replace('"', '')] = v) && acc, {})

export const createPeriodText = (
  period: { start: string; end?: string | null | undefined },
  lang: Lang,
  withDate?: boolean,
) => {
  const textContents = {
    [Lang.Ja]: {
      texts: {
        now: '現在',
      },
    },
    [Lang.En]: {
      texts: {
        now: 'Now',
      },
    },
  }

  return `${formatDateString(period.start, lang, withDate)} - ${
    period.end
      ? `${formatDateString(period.end, lang, withDate)}`
      : textContents[lang].texts.now
  }`
}

// ファイルをダウンロードさせる関数
export const downloadFile = (blob: Blob, fileName: string) => {
  const link = document.createElement('a')
  link.href = (window.URL || window.webkitURL).createObjectURL(blob)
  link.download = fileName
  link.click()
}
