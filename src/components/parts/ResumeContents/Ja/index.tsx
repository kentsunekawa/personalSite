"use client"
// import from libraries
import { format } from "date-fns"

// import from this project
import { useStyle } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"
import { PrintPages } from "@/components/parts/PrintPages"
import { Section } from "./Section"
import { ProjectBox } from "./ProjectBox"
import { WorkHistories } from "./WorkHistories"
import { Skill } from "./Skill"
import { createStyles } from "./styles"

import { Props } from "../"

export const Ja: React.FC<Props> = ({ profile, resume }) => {
  const { styles } = useStyle(createStyles)
  const { lang, summary, projects, skills, introduction, workHistories } =
    resume

  return (
    <div css={styles.container}>
      <PrintPages
        pages={[
          <div css={styles.main} key="1">
            <div css={styles.header.container}>
              <div css={styles.header.title.container}>
                <Texts.Heading
                  tag="h1"
                  size="h5"
                  align="center"
                  insertCss={styles.header.title.text}
                >
                  職務経歴書
                </Texts.Heading>
              </div>
              <div css={styles.header.meta.container}>
                <div css={styles.header.meta.row}>
                  <Texts.Text size="s">
                    {format(new Date(), "yyyy年MM月dd日")}
                  </Texts.Text>
                </div>
                <div css={styles.header.meta.row}>
                  <Texts.Text size="s">氏名: {profile.name}</Texts.Text>
                </div>
              </div>
            </div>
            <div css={styles.section}>
              <Section title="職務概要">
                <Texts.Text size="s">{summary}</Texts.Text>
              </Section>
            </div>
            <div css={styles.section}>
              <Section title="職務経歴">
                <WorkHistories workHistories={workHistories} lang={lang} />
              </Section>
            </div>
            <div css={styles.section}>
              <Section title="テクニカルスキル">
                <Skill skills={skills} />
              </Section>
            </div>
          </div>,
          <div css={styles.main} key="2">
            <Section title="プロジェクト">
              <ProjectBox project={projects[0]} lang={lang} />
            </Section>
          </div>,
          <div css={styles.main} key="3">
            <ProjectBox project={projects[1]} lang={lang} />
          </div>,
          <div css={styles.main} key="4">
            <ProjectBox project={projects[2]} lang={lang} />
          </div>,
          <div css={styles.main} key="5">
            {introduction && (
              <div css={styles.section}>
                <Section title="自己 PR">
                  <MarkdownDisplay insertStyles={styles.markdownStyle}>
                    {introduction}
                  </MarkdownDisplay>
                </Section>
              </div>
            )}
          </div>,
        ]}
      />
    </div>
  )
}
