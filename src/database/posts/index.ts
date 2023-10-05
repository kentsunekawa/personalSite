import { Data } from "@/types"
import { Lang, Post } from "@/graphql/generated/types"

import { posts as ja } from "./ja"
import { posts as en } from "./en"

export const posts: Data<Post[]> = {
  [Lang.Ja]: ja,
  [Lang.En]: en,
}
