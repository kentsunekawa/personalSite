import { Client } from "@notionhq/client"

import {
  Label,
  Skill,
  Account,
  WorkHistory,
  EducationalBackground,
  Project,
  Profile,
  Post,
} from "@/types"

export type PageObject = MatchType<
  Awaited<ReturnType<Client["pages"]["retrieve"]>>,
  {
    properties: unknown
  }
>

export type DataObject = ElementType<
  Awaited<ReturnType<Client["databases"]["query"]>>["results"]
>

function notEmpty<TValue>(value: TValue | null): value is TValue {
  return value !== null
}

export const transformProfileData = ({ properties }: PageObject): Profile => ({
  label: properties.labels.multi_select.map(({ id, name }) => ({
    id,
    name,
  })),
  image: properties.image.files[0].file.url,
  name: properties.name.rich_text[0].text.content,
  birthDate: properties.birthDate.date.start,
  businessTitle: properties.businessTitle.rich_text[0].text.content[0].text,
  speciality: properties.speciality.rich_text[0].text.content,
  email: properties.email.email,
  accounts: properties.accounts.relation,
  skills: properties.skills.relation,
  message: properties.message.rich_text[0].text.content,
})

export const transformAccountsData = (results: DataObject[]): Account[] =>
  results
    .map((result) =>
      "properties" in result
        ? {
            id: result.id,
            name: result.properties.name.title[0].text.content,
            url: result.properties.url.url,
          }
        : null
    )
    .filter(notEmpty)

export const transformSkillsData = (results: DataObject[]): Skill[] =>
  results
    .map((result) =>
      "properties" in result
        ? {
            id: result.id,
            name: result.properties.name.title[0].text.content,
            proficiency: result.properties.proficiency.select.name,
          }
        : null
    )
    .filter(notEmpty)

export const transformProjectsData = (results: DataObject[]): Project[] =>
  results
    .map((result) => ("properties" in result ? result : null))
    .filter(notEmpty)
    .map(({ id, properties }) => ({
      id,
      title: properties.title.title[0].text.content,
      belonging: properties.belonging.relation[0],
      period: properties.period.date,
      position: properties.position.rich_text[0].text.content,
      responsibility: properties.responsibility.rich_text[0].text.content,
      team: properties.team.rich_text[0].text.content,
      technologies: properties.belonging.relation,
    }))

export const transformEducationalBackgroundsData = (
  results: DataObject[]
): EducationalBackground[] =>
  results
    .map((result) => ("properties" in result ? result : null))
    .filter(notEmpty)
    .map(({ id, properties }) => ({
      id,
      name: properties.name.title[0].text.content,
      department: properties.department.rich_text[0].text.content,
      period: properties.period.date,
    }))

export const transformWorkHistoriesData = (
  results: DataObject[]
): WorkHistory[] =>
  results
    .map((result) => ("properties" in result ? result : null))
    .filter(notEmpty)
    .map(({ id, properties }) => ({
      id,
      name: properties.name.title[0].text.content,
      period: properties.period.date,
      position: properties.position.rich_text[0].text.content,
      employmentType: properties.employmentType.multi_select.map(
        ({ name }) => name
      ),
    }))

export const transformPostData = ({ id, properties }: PageObject): Post => ({
  id,
  date: properties.date.date.start,
  title: properties.title.title[0].text.content,
  slug: properties.slug.rich_text[0].text.content,
  status: properties.status.select.name,
  labels: properties.labels.multi_select.map(({ name }) => name),
})

export const transformPostsData = (results: DataObject[]): Post[] =>
  results
    .map((result) => ("properties" in result ? result : null))
    .filter(notEmpty)
    .map(({ id, properties }) => ({
      id,
      date: properties.date.date.start,
      title: properties.title.title[0].text.content,
      slug: properties.slug.rich_text[0].text.content,
      status: properties.status.select.name,
      labels: properties.labels.multi_select.map(({ name }) => name),
    }))
