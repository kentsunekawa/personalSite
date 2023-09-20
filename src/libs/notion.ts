import { Client } from "@notionhq/client"

import { Profile, Post } from "@/types"
import {
  transformProfileData,
  transformAccountsData,
  transformSkillsData,
  transformProjectsData,
  transformEducationalBackgroundsData,
  transformWorkHistoriesData,
  transformPostData,
  transformPostsData,
} from "./functions"

export type PageObject = MatchType<
  Awaited<ReturnType<Client["pages"]["retrieve"]>>,
  {
    properties: unknown
  }
>

const pageIds = {
  profile: "ece58dec-1546-4b3d-b2d6-34b7c69f0a93",
}

const databaseIds = {
  accounts: "3a95d2dabdbe4eb3b269295724e41fda",
  skills: "10ed95be280f465c9e98ad8cd56f10aa",
  projects: "d083e5197f3349f7992bb3c82e62daf8",
  educationalBackgrounds: "a37c88d46faf425ab3d6a1bc195c17c2",
  workHistories: "e4f0cb5baf40423ca35867f1248d92cb",
  posts: "e16a4e4733d747a898bd4d25cb226b64",
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

    const block = await this.client.blocks.retrieve({
      block_id: pageIds.profile,
    })

    const blocks = await this.client.blocks.children.list({
      block_id: pageIds.profile,
    })

    console.log(blocks)

    return transformProfileData(response)
  }

  async getPost(id: string): Promise<Post> {
    const response = await this.getPage(id)

    if (!("properties" in response)) {
      throw new Error()
    }

    return transformPostData(response)
  }

  async getAccounts() {
    const response = await this.getDatabase(databaseIds.accounts)

    return transformAccountsData(response.results)
  }

  async getEducationalBackgrounds() {
    const response = await this.getDatabase(databaseIds.educationalBackgrounds)

    return transformEducationalBackgroundsData(response.results)
  }

  async getWorkHistories() {
    const response = await this.getDatabase(databaseIds.workHistories)

    return transformWorkHistoriesData(response.results)
  }

  async getSkills() {
    const response = await this.getDatabase(databaseIds.skills)

    return transformSkillsData(response.results)
  }

  async getProjects() {
    const response = await this.getDatabase(databaseIds.projects)

    return transformProjectsData(response.results)
  }

  async getPosts() {
    const response = await this.getDatabase(databaseIds.posts)

    return transformPostsData(response.results)
  }
}
