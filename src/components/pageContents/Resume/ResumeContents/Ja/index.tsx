"use client"
// import from libraries
import { useCallback, useState } from "react"
import { format } from "date-fns"

// import from this project
import { useStyle } from "@/hooks"
import { downloadFile } from "@/utils"
import { FetchStatus } from "@/types"
import { Texts } from "@/components/parts/Texts"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"
import { PrintPages } from "@/components/parts/PrintPages"
import { Button } from "@/components/parts/Button"
import { MQ } from "@/components/parts/MQ"
import { ReplaceLineFeedCodeToBr } from "@/components/parts/ReplaceLineFeedCodeToBr"
import { Section } from "./Section"
import { ProjectBox } from "./ProjectBox"
import { WorkHistories } from "./WorkHistories"
import { Skill } from "./Skill"
import { createStyles } from "./styles"

import { Props } from ".."

export const Ja: React.FC<Props> = ({ profile, resume }) => {
  const { styles } = useStyle(createStyles)
  const { lang, summary, projects, skills, introduction, workHistories } =
    resume

  const [fetchStatus, setFetchStatus] = useState<FetchStatus>({
    isLoading: false,
    isError: false,
  })

  const download = useCallback(async () => {
    try {
      setFetchStatus((prev) => ({
        ...prev,
        isLoading: true,
      }))
      const result = await fetch(`/api/resume?companyName=master&lang=ja`)
      if (result.ok) {
        const file = await result.blob()
        setFetchStatus({ isError: false, isLoading: false })

        downloadFile(file, "resume_kentsunekawa.pdf")
      } else {
        throw new Error()
      }
    } catch (e) {
      setFetchStatus({ isError: true, isLoading: false })
    }
  }, [])

  return (
    <>
      <div css={styles.container}>
        <MQ print={false}>
          <div css={styles.buttonArea}>
            <Button onClick={download} type="filled" size="s">
              Download
            </Button>
            {fetchStatus.isError && (
              <Texts.Caption>Failed download</Texts.Caption>
            )}
          </div>
        </MQ>
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
                  <Texts.Text size="s">
                    <ReplaceLineFeedCodeToBr>{summary}</ReplaceLineFeedCodeToBr>
                  </Texts.Text>
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
    </>
  )
}
