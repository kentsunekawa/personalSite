import { projects as projectsData } from "@/server/database/projects"
import {
  Resolver,
  ResolverTypeWrapper,
  Project,
  GetProjectsQueryVariables,
  Lang,
} from "@/graphql/generated/types"

export const projects: Resolver<
  ResolverTypeWrapper<Project>[],
  {},
  {},
  GetProjectsQueryVariables
> = (_, b) => projectsData[b.lang ?? Lang.Ja]
