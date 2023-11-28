"use client"
// import from libraries

// import from this project
import { useStyle } from "@/hooks"
import { Section } from "./Section"
import { Project } from "./Project"
import { Skill } from "./Skill"
import { createStyles } from "./styles"

import { Props } from "../"

export const Ja: React.FC<Props> = ({ profile, resume }) => {
  const { styles } = useStyle(createStyles)
  const { summary, projects, skills, introduction } = resume

  return (
    <div css={styles.container}>
      <div css={styles.header.container}>
        <div css={styles.header.title.container}>
          <h1 css={styles.header.title.text}>職務経歴</h1>
        </div>
        <div css={styles.header.meta.container}>
          <div css={styles.header.meta.row}>
            <p>2023年10月10日</p>
          </div>
          <div css={styles.header.meta.row}>
            <p>氏名: {profile.name}</p>
          </div>
        </div>
      </div>
      <div css={styles.main}>
        <div css={styles.section}>
          <Section title="職務概要">
            <p>{summary}</p>
          </Section>
        </div>
        <div css={styles.section}>
          <Section title="プロジェクト">
            <div>
              <ul>
                {projects.map((project) => (
                  <li key={project.slug}>
                    <Project project={project} />
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </div>
        <div css={styles.section}>
          <Section title="テクニカルスキル">
            <Skill skills={skills} />
          </Section>
        </div>
        <div css={styles.section}>
          <Section title="自己 PR">
            <p>{introduction}</p>
          </Section>
        </div>
      </div>
    </div>
  )
}
