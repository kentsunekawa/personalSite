import { projects as projectsData } from "@/server/database/projects"
import {
  Resolver,
  ResolverTypeWrapper,
  Project,
  GetProjectsQueryVariables,
  Lang,
} from "@/graphql/generated/types"
import { slugs } from "@/server/database/projects"

export { slugs }

type Slug = (typeof slugs)[keyof typeof slugs]

export const createProjects = (
  { lang }: GetProjectsQueryVariables,
  slugs?: Slug[]
) =>
  projectsData[lang ?? Lang.Ja].filter(
    ({ slug }) => slugs === undefined || slugs.includes(slug as Slug)
  )

export const projects: Resolver<
  ResolverTypeWrapper<Project>[],
  {},
  {},
  GetProjectsQueryVariables
> = (_, getProjectsQueryVariables) => createProjects(getProjectsQueryVariables)
