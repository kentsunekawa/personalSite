import { Resolvers } from "@/graphql/generated/types"

import { posts } from "./posts"
import { profile } from "./profile"
import { profiles } from "@/database/profiles"

export const resolvers: Resolvers = {
  Query: {
    posts,
    profile,
  },
}
