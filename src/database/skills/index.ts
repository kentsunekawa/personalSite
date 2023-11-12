import { TypeofValue } from "@/types"
import { Skill, Proficiency } from "@/graphql/generated/types"

type SlugName = TypeofValue<typeof slugs>

export const slugs = {
  typescript: "typescript",
  javascript: "javascript",
  react: "react",
  jquery: "jquery",
  graphql: "graphql",
  webpack: "webpack",
  gulp: "gulp",
  expo: "expo",
  reactNative: "reactNative",
  redux: "redux",
  css3: "css3",
  sass: "sass",
  html5: "html5",
  illustrator: "illustrator",
  photoshop: "photoshop",
  figma: "figma",
  git: "git",
  gitHub: "gitHub",
} as const

export const skills: Skill[] = [
  {
    id: "typescript",
    slug: slugs.typescript,
    name: "TypeScript",
    proficiency: Proficiency.Experienced,
  },
  {
    id: "javascript",
    slug: slugs.javascript,
    name: "JavaScript",
    proficiency: Proficiency.Experienced,
  },
  {
    id: "react",
    slug: slugs.react,
    name: "React",
    proficiency: Proficiency.Experienced,
  },
  {
    id: "jquery",
    slug: slugs.jquery,
    name: "jQuery",
    proficiency: Proficiency.Experienced,
  },
  {
    id: "graphql",
    slug: slugs.graphql,
    name: "graphql",
    proficiency: Proficiency.Experienced,
  },
  {
    id: "webpack",
    slug: slugs.webpack,
    name: "webpack",
    proficiency: Proficiency.Experienced,
  },
  {
    id: "gulp",
    slug: slugs.gulp,
    name: "Gulp",
    proficiency: Proficiency.Experienced,
  },
  {
    id: "expo",
    slug: slugs.expo,
    name: "Expo",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "reactNative",
    slug: slugs.reactNative,
    name: "ReactNative",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "redux",
    slug: slugs.redux,
    name: "Redux",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "css3",
    slug: slugs.css3,
    name: "CSS3",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "sass",
    slug: slugs.sass,
    name: "Sass",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "html5",
    slug: slugs.html5,
    name: "HTML5",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "illustrator",
    slug: slugs.illustrator,
    name: "Illustrator",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "photoshop",
    slug: slugs.photoshop,
    name: "Photoshop",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "figma",
    slug: slugs.figma,
    name: "Figma",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "git",
    slug: slugs.git,
    name: "Git",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "gitHub",
    slug: slugs.gitHub,
    name: "GitHub",
    proficiency: Proficiency.HaveUsed,
  },
]

export const getSkills = (targetSlugs?: SlugName[]) =>
  targetSlugs
    ? skills.filter(({ slug }) => targetSlugs.includes(slug as SlugName))
    : skills
