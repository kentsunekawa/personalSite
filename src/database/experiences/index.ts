import { Data } from "@/types"
import { Lang, Post } from "@/graphql/generated/types"

export { slugs } from "./slugs"
import { slugName } from "./slugName"
import { hogehoge } from "./hogehoge"

const posts = [slugName, hogehoge]

const getPosts = (lang: Lang) =>
  posts
    .map((post) => post[lang])
    .filter((post): post is NonNullable<typeof post> => !!post)

export const experiences: Data<Post[]> = {
  [Lang.Ja]: getPosts(Lang.Ja),
  [Lang.En]: getPosts(Lang.En),
}
