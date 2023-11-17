"use client"
// import from this project
import { PageState } from "@/types"
import { useStyle } from "@/hooks"
import { Profile as ProfileType, Lang } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"
import { PageContent } from "@/components/parts/PageContent"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"
import { Skills } from "@/components/pageContents/Profile/Skills"
import { EducationalBackgrounds } from "@/components/parts/EducationalBackgrounds"
import { WorkHistories } from "@/components/parts/WorkHistories"
import { Section } from "@/components/parts/contents/Section"
import { createStyles } from "./styles"
import { Summary } from "./Summary"

type Props = PageState & {
  profile: ProfileType
}

const contents = {
  [Lang.Ja]: {
    sectionLabels: {
      introduction: "自己紹介",
      skills: "スキル",
      educationalBackgrounds: "学歴",
      workHistories: "職務経歴",
    },
  },
  [Lang.En]: {
    sectionLabels: {
      introduction: "Introduction",
      skills: "Skills",
      educationalBackgrounds: "Educational backgrounds",
      workHistories: "Work histories",
    },
  },
}

export const Profile: React.FC<Props> = ({ lang, profile }) => {
  const {
    name,
    image,
    birthDate,
    businessTitle,
    speciality,
    accounts,
    email,
    message,
    introduction,
    skills,
    educationalBackgrounds,
    workHistories,
  } = profile

  const { styles } = useStyle(createStyles)

  return (
    <PageBase>
      <PageContent
        breadCrumsInfo={{
          lang,
          clumbs: [
            {
              pageName: "home",
            },
            {
              isCurrent: true,
              pageName: "profile",
            },
          ],
        }}
        title="Profile"
      >
        <div css={styles.layout.container}>
          <div css={styles.layout.sub}>
            <Summary
              lang={lang}
              data={{
                name,
                image,
                email,
                birthDate,
                businessTitle,
                speciality,
                accounts,
              }}
            />
          </div>
          <div css={styles.layout.main}>
            <Section.Wrapper>
              {message && <MarkdownDisplay>{message}</MarkdownDisplay>}
              <Section.Box
                title={{
                  tag: "h2",
                  node: contents[lang].sectionLabels.skills,
                }}
              >
                <Skills skills={skills} />
              </Section.Box>
              <Section.Box
                title={{
                  tag: "h2",
                  node: contents[lang].sectionLabels.educationalBackgrounds,
                }}
              >
                <EducationalBackgrounds
                  lang={lang}
                  educationalBackgrounds={educationalBackgrounds}
                />
              </Section.Box>
              <Section.Box
                title={{
                  tag: "h2",
                  node: contents[lang].sectionLabels.workHistories,
                }}
              >
                <WorkHistories lang={lang} workHistories={workHistories} />
              </Section.Box>
              {introduction && (
                <Section.Box
                  title={{
                    tag: "h2",
                    node: contents[lang].sectionLabels.introduction,
                  }}
                >
                  <MarkdownDisplay>{introduction}</MarkdownDisplay>
                </Section.Box>
              )}
            </Section.Wrapper>
          </div>
        </div>
      </PageContent>
    </PageBase>
  )
}
