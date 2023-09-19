import { Client } from "@notionhq/client"

import type { Profile, Account } from "./notion"

export type PageObject = MatchType<
  Awaited<ReturnType<Client["pages"]["retrieve"]>>,
  {
    properties: unknown
  }
>

export type DataObject = ElementType<
  Awaited<ReturnType<Client["databases"]["query"]>>["results"]
>

export const transformPageData = ({ properties }: PageObject): Profile => {
  return {
    label: properties.labels.multi_select.map(({ id, name }) => ({
      id,
      name,
    })),
    image: properties.image.files[0].file.url,
    name: properties.name.rich_text[0].text.content,
    birthDate: properties.birthDate.date.start,
    businessTitle: properties.businessTitle.rich_text[0].text.content,
    speciality: properties.speciality.rich_text[0].text.content,
    email: properties.email.email,
    accounts: properties.accounts.relation,
    skills: properties.skills.relation,
    message: properties.message.rich_text[0].text.content,
  }
}

export const transformAccountsData = (
  results: DataObject[]
): (Account | null)[] => {
  results.forEach((result) => {
    console.log(result)
  })

  const a = results
    .map((result) =>
      "properties" in result
        ? {
            id: result.id,
            name: result.properties.name.title[0].text.content,
            url: result.properties.url.url,
          }
        : null
    )
    .filter((result) => !!result)

  return a
}
