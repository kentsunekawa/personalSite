import { createPostCommonData } from "@/functions/createPostCommonData"

import { slugs, createPost } from "../slugs"
import { ja } from "./ja"

export const toBecomeFreelancer = createPost(
  [ja],
  createPostCommonData(slugs.toBecomeFreelancer)
)
