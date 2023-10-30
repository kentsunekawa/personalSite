import { TypeofValue } from "@/types"
import { Skill, Proficiency } from "@/graphql/generated/types"

type SlugName = TypeofValue<typeof slugs>

export const slugs = {
  typescript: "typescript",
  react: "react",
  reactNative: "reactNative",
} as const

export const skills: Skill[] = [
  {
    id: "typescript",
    slug: slugs.typescript,
    name: "TypeScript",
    proficiency: Proficiency.Experienced,
  },
  {
    id: "react",
    slug: slugs.react,
    name: "React",
    proficiency: Proficiency.Experienced,
  },
  {
    id: "reactNative",
    slug: slugs.reactNative,
    name: "React Native",
    proficiency: Proficiency.HaveUsed,
  },
]

export const getSkills = (targetSlugs: SlugName[]) =>
  skills.filter(({ slug }) => targetSlugs.includes(slug as SlugName))
