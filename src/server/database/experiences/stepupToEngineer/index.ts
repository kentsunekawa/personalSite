import { createPostCommonData } from "@/functions/createPostCommonData"

import { slugs, createPost } from "../slugs"
import { ja } from "./ja"

export const stepupToEngineer = createPost(
  [ja],
  createPostCommonData(slugs.stepupToEngineer)
)
