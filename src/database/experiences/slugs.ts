import { Data, OmitIdSlug } from "@/types"
import { Lang, Post } from "@/graphql/generated/types"
import { createPostCommonData } from "@/functions/createPostCommonData"

export type PostRowData = Omit<OmitIdSlug<Post>, "lang"> & {
  lang: Lang
}

export const slugs = {
  slugName: "slugName",
  hogehoge: "hogehoge",
} as const

export const createPost = (
  datas: PostRowData[],
  commonData: {
    [k in Lang]: {
      id: string
      slug: string
    }
  }
): { [k in Lang]?: Post } => {
  const isExist = (lang: Lang) => datas.some(({ lang: l }) => l === lang)
  const createdData: { [k in Lang]?: Post } = {}
  datas.forEach(({ lang, ...data }) => {
    createdData[lang] = {
      ...commonData[lang],
      ...data,
      lang: {
        JA: isExist("JA"),
        EN: isExist("EN"),
      },
    }
  })

  return createdData
}
