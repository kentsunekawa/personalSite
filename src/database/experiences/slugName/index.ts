import { createPostCommonData } from "@/functions/createPostCommonData"

import { slugs, createPost } from "../slugs"
import { ja } from "./ja"
import { en } from "./en"

export const slugName = createPost(
  [ja, en],
  createPostCommonData(slugs.slugName)
)
