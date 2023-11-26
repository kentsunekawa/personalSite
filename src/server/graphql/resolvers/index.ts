import { Resolvers } from "@/graphql/generated/types"

import { profile } from "./profile"
import { posts } from "./posts"
import { post } from "./post"
import { projects } from "./projects"
import { resume } from "./resume"

export const resolvers: Resolvers = {
  Query: {
    profile,
    projects,
    posts,
    post,
    resume,
  },
}
