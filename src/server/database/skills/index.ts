import { TypeofValue } from "@/types"
import { Skill, Proficiency } from "@/graphql/generated/types"

type SlugName = TypeofValue<typeof slugs>

export const slugs = {
  apollo: "apollo",
  babel: "babel",
  css3: "css3",
  cypress: "cypress",
  ecbeing: "ecbeing",
  eslint: "eslint",
  expo: "expo",
  figma: "figma",
  git: "git",
  graphql: "graphql",
  gulp: "gulp",
  html5: "html5",
  illustrator: "illustrator",
  javascript: "javascript",
  jest: "jest",
  jquery: "jquery",
  materialUi: "materialUi",
  nextjs: "nextjs",
  photoshop: "photoshop",
  prettier: "prettier",
  react: "react",
  reactNative: "reactNative",
  redux: "redux",
  sass: "sass",
  storybook: "storybook",
  styledComponents: "styledComponents",
  testingLibrary: "testingLibrary",
  typescript: "typescript",
  vite: "vite",
  webpack: "webpack",
  wordpress: "wordpress",
} as const

const allSkills: Skill[] = [
  {
    id: "apollo",
    slug: slugs.apollo,
    name: "Apollo",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "babel",
    slug: slugs.babel,
    name: "BABEL",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "css3",
    slug: slugs.css3,
    name: "CSS3",
    proficiency: Proficiency.Experienced,
    summary: "5 年以上の実務プロジェクトでの開発経験あり。",
  },
  {
    id: "Cypress",
    slug: slugs.cypress,
    name: "Cypress",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "ecbeing",
    slug: slugs.ecbeing,
    name: "ecbeing",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "eslint",
    slug: slugs.eslint,
    name: "Eslint",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "expo",
    slug: slugs.expo,
    name: "Expo",
    proficiency: Proficiency.Experienced,
    summary:
      "Managed workflow での利用で、iOS / Android / Web を含むクロスプラットフォームでの開発経験あり。",
  },
  {
    id: "figma",
    slug: slugs.figma,
    name: "Figma",
    proficiency: Proficiency.Experienced,
    summary:
      "一通りの使用方法を習得。開発時のデザイナーとのコミュニケーションに使用。",
  },
  {
    id: "git",
    slug: slugs.git,
    name: "Git・GitHub",
    proficiency: Proficiency.Experienced,
    summary: "チームでの開発において使用経験あり。",
  },
  {
    id: "graphql",
    slug: slugs.graphql,
    name: "GraphQL",
    proficiency: Proficiency.Experienced,
    summary: "3 つ以上の SPA 開発プロジェクトにおいて使用経験あり。",
  },
  {
    id: "gulp",
    slug: slugs.gulp,
    name: "Gulp",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "html5",
    slug: slugs.html5,
    name: "HTML5",
    proficiency: Proficiency.Experienced,
    summary: "5 年以上の実務プロジェクトでの開発経験あり。",
  },
  {
    id: "illustrator",
    slug: slugs.illustrator,
    name: "Illustrator",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "javascript",
    slug: slugs.javascript,
    name: "JavaScript",
    proficiency: Proficiency.Experienced,
    summary:
      "5 年以上の実務プロジェクトでの開発経験あり。React や jQuery を使わない Vanilla JS での記述も可能。",
  },
  {
    id: "jest",
    slug: slugs.jest,
    name: "Jest",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "jquery",
    slug: slugs.jquery,
    name: "jQuery",
    proficiency: Proficiency.HaveUsed,
  },

  {
    id: "materialUi",
    slug: slugs.materialUi,
    name: "Material UI",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "nextjs",
    slug: slugs.nextjs,
    name: "Next.js",
    proficiency: Proficiency.Experienced,
    summary:
      "実務プロジェクトでの使用経験はほぼ無し。プライベートプロジェクトでの使用経験あり。",
  },
  {
    id: "photoshop",
    slug: slugs.photoshop,
    name: "Photoshop",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "prettier",
    slug: slugs.prettier,
    name: "Prettier",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "react",
    slug: slugs.react,
    name: "React",
    proficiency: Proficiency.Experienced,
    summary: "3 つ以上の実務プロジェクトにおいて SPA の開発経験あり。",
  },
  {
    id: "reactNative",
    slug: slugs.reactNative,
    name: "React Native",
    proficiency: Proficiency.Experienced,
    summary:
      "Expo（Managed workflow）との利用で、iOS / Android / Web を含むクロスプラットフォームでの開発経験あり。",
  },
  {
    id: "redux",
    slug: slugs.redux,
    name: "Redux",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "sass",
    slug: slugs.sass,
    name: "Sass",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "storybook",
    slug: slugs.storybook,
    name: "Storybook",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "styledComponents",
    slug: slugs.styledComponents,
    name: "Styled Components",
    proficiency: Proficiency.HaveUsed,
  },

  {
    id: "testingLibrary",
    slug: slugs.testingLibrary,
    name: "Testing Library",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "typescript",
    slug: slugs.typescript,
    name: "TypeScript",
    proficiency: Proficiency.Experienced,
    summary: "3 年以上の実務プロジェクトでの開発経験あり。",
  },
  {
    id: "vite",
    slug: slugs.vite,
    name: "Vite",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "webpack",
    slug: slugs.webpack,
    name: "Webpack",
    proficiency: Proficiency.HaveUsed,
  },
  {
    id: "wordpress",
    slug: slugs.wordpress,
    name: "WordPress",
    proficiency: Proficiency.HaveUsed,
  },
]

export const getSkills = (targetSlugs?: SlugName[]) =>
  targetSlugs
    ? targetSlugs
        .map((targetSlug) => allSkills.find(({ slug }) => slug === targetSlug))
        .filter((item): item is NonNullable<typeof item> => item != null)
    : skills

export const skills: Skill[] = getSkills([
  slugs.react,
  slugs.typescript,
  slugs.javascript,
  slugs.nextjs,
  slugs.reactNative,
  slugs.expo,
  slugs.graphql,
  slugs.html5,
  slugs.css3,
  slugs.figma,
  slugs.sass,
  slugs.jest,
  slugs.testingLibrary,
  slugs.cypress,
  slugs.jquery,
  slugs.apollo,
  slugs.redux,
  slugs.materialUi,
  slugs.styledComponents,
  slugs.storybook,
  slugs.eslint,
  slugs.prettier,
  slugs.babel,
  slugs.webpack,
  slugs.vite,
  slugs.gulp,
  slugs.git,
  slugs.illustrator,
  slugs.photoshop,
])
