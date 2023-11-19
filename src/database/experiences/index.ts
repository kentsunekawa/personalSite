import { Data } from "@/types"
import { Lang, Post } from "@/graphql/generated/types"

export { slugs } from "./slugs"
import { stepupToEngineer } from "./stepupToEngineer"
import { toBecomeFreelancer } from "./toBecomeFreelancer"
import { toBeGlobalPerson } from "./toBeGlobalPerson"

const posts: { [k in Lang]?: Post }[] = [
  stepupToEngineer,
  toBecomeFreelancer,
  toBeGlobalPerson,
]

const getPosts = (lang: Lang) =>
  posts
    .map((post) => post[lang])
    .filter((post): post is NonNullable<typeof post> => !!post)

export const experiences: Data<Post[]> = {
  [Lang.Ja]: getPosts(Lang.Ja),
  [Lang.En]: getPosts(Lang.En),
}
