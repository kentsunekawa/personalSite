import { Client } from "@notionhq/client"

import { transformPageData, transformAccountsData } from "./functions"

export type PageObject = MatchType<
  Awaited<ReturnType<Client["pages"]["retrieve"]>>,
  {
    properties: unknown
  }
>

export type Label = {
  id: string
  name: string
}

export type Skill = {
  id: string
}

export type Account = {
  id: string
  name: string
  url: string
}

type Relation<T extends { [k: string]: unknown }> = Pick<T, "id">

const pageIds = {
  profile: "ece58dec-1546-4b3d-b2d6-34b7c69f0a93",
}

const databaseIds = {
  accounts: "3a95d2dabdbe4eb3b269295724e41fda",
}

export type Profile = {
  label: Label[]
  image: string
  name: string
  birthDate: Date
  businessTitle: string
  speciality: string
  email: string
  accounts: Relation<Account>[]
  skills: Relation<Skill>[]
  message: string
}

export class NotionClient {
  client: Client

  constructor() {
    if (!process.env.NEXT_PUBLIC_NOTION_KEY)
      throw new Error("API TOKEN doesn't exist.")

    this.client = new Client({
      auth: process.env.NEXT_PUBLIC_NOTION_KEY,
    })
  }

  async getPage(page_id: string) {
    return this.client.pages.retrieve({
      page_id,
    })
  }

  async getDatabase(database_id: string) {
    return this.client.databases.query({
      database_id,
    })
  }

  async getProfile(): Promise<Profile> {
    const response = await this.getPage(pageIds.profile)

    if (!("properties" in response)) {
      throw new Error()
    }

    return transformPageData(response)
  }

  async getAccounts() {
    const response = await this.getDatabase(databaseIds.accounts)

    // if (!("properties" in response)) {
    //   throw new Error()
    // }

    return transformAccountsData(response.results)
  }
}
