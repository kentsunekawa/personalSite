import { Resolvers } from "@/graphql/generated/types"

import { posts } from "./posts"
import { accounts } from "./accounts"

export const resolvers: Resolvers = {
  Query: {
    posts,
    accounts,
  },
}
