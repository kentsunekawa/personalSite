import { Resolvers } from "@/graphql/generated/types"

import { posts } from "./posts"
import { profile } from "./profile"

export const resolvers: Resolvers = {
  Query: {
    posts,
    profile,
  },
}
