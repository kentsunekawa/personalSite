import { createPostCommonData } from "@/functions/createPostCommonData"

import { slugs, createPost } from "../slugs"
import { ja } from "./ja"

export const hogehoge = createPost([ja], createPostCommonData(slugs.hogehoge))
