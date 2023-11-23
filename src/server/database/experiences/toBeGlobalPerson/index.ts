import { createPostCommonData } from "@/functions/createPostCommonData"

import { slugs, createPost } from "../slugs"
import { ja } from "./ja"

export const toBeGlobalPerson = createPost(
  [ja],
  createPostCommonData(slugs.toBeGlobalPerson)
)
