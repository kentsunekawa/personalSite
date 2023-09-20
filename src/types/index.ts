import { CSSProp } from "styled-components"

export type InsertStyles<T extends string> = {
  [k in T]?: CSSProp
}

type Relation<T extends { [k: string]: unknown }> = Pick<T, "id">

export type PostStatus = "published" | "draft"

export type EmploymentType = "fullTime"

export type Proficiency = "experienced" | "haveUsed"

export type PostLabel = "highPriority"

export type Label = {
  id: string
  name: string
}

export type Skill = {
  id: string
  name: string
  proficiency: Proficiency
}

export type Account = {
  id: string
  name: string
  url: string
}

export type WorkHistory = {
  id: string
  name: string
  period: {
    start: string
    end: string
  }
  employmentType: EmploymentType[]
  position: string
}

export type EducationalBackground = {
  id: string
  name: string
  department: string
  period: {
    start: string
    end: string
  }
}

export type Project = {
  id: string
  title: string
  belonging: Relation<WorkHistory>
  period: {
    start: string
    end: string
  }
  position: string
  responsibility: string
  team: string
  technologies: Relation<Skill>[]
}

export type Profile = {
  label: Label[]
  image: string
  name: string
  birthDate: string
  businessTitle: string
  speciality: string
  email: string
  accounts: Relation<Account>[]
  skills: Relation<Skill>[]
  message: string
}

export type Post = {
  id: string
  title: string
  slug: string
  date: string
  status: PostStatus
  labels: PostLabel[]
}
