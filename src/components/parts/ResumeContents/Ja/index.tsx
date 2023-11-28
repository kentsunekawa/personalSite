"use client"
// import from libraries
import { format } from "date-fns"

// import from this project
import { useStyle } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { Section } from "./Section"
import { SubSection } from "./SubSection"
import { ProjectBox } from "./ProjectBox"
import { Skill } from "./Skill"
import { createStyles } from "./styles"

import { Props } from "../"

export const Ja: React.FC<Props> = ({ profile, resume }) => {
  const { styles } = useStyle(createStyles)
  const { lang, summary, projects, skills, introduction } = resume

  return (
    <div css={styles.container}>
      <div css={styles.header.container}>
        <div css={styles.header.title.container}>
          <Texts.Heading tag="h1" align="center">
            職務経歴
          </Texts.Heading>
        </div>
        <div css={styles.header.meta.container}>
          <div css={styles.header.meta.row}>
            <Texts.Text>{format(new Date(), "yyyy年MM月dd日")}</Texts.Text>
          </div>
          <div css={styles.header.meta.row}>
            <Texts.Text>氏名: {profile.name}</Texts.Text>
          </div>
        </div>
      </div>
      <div css={styles.main}>
        <div css={styles.section}>
          <Section title="職務概要">
            <Texts.Text>{summary}</Texts.Text>
          </Section>
        </div>
        <div css={styles.section}>
          <Section title="プロジェクト">
            <div css={styles.list.container}>
              {projects.map((project) => (
                <div key={project.slug} css={styles.list.row}>
                  <ProjectBox project={project} lang={lang} />
                </div>
              ))}
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
            <div css={styles.list.container}>
              {introduction.map(({ title, content }) => (
                <div key={title} css={styles.list.row}>
                  {
                    <SubSection title={title}>
                      <Texts.Text>{content}</Texts.Text>
                    </SubSection>
                  }
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
