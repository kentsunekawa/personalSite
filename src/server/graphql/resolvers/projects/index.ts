import { projects as projectsData } from "@/server/database/projects"
import {
  Resolver,
  ResolverTypeWrapper,
  Project,
  GetProjectsQueryVariables,
  Lang,
} from "@/graphql/generated/types"

export const createProjects = ({ lang }: GetProjectsQueryVariables) =>
  projectsData[lang ?? Lang.Ja]

export const projects: Resolver<
  ResolverTypeWrapper<Project>[],
  {},
  {},
  GetProjectsQueryVariables
> = (_, getProjectsQueryVariables) => createProjects(getProjectsQueryVariables)
