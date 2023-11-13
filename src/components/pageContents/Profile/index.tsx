"use client"
// import from this project
import { PageState } from "@/types"
import { useStyle } from "@/hooks"
import { Profile as ProfileType, Lang } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"
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
      message: "自己紹介",
      skills: "スキル",
      educationalBackgrounds: "学歴",
      workHistories: "職務経歴",
    },
  },
  [Lang.En]: {
    sectionLabels: {
      message: "Message",
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
    skills,
    educationalBackgrounds,
    workHistories,
  } = profile

  const { styles } = useStyle(createStyles)

  return (
    <PageBase>
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
            {message && (
              <Section.Box
                title={{
                  tag: "h2",
                  node: contents[lang].sectionLabels.message,
                }}
              >
                <MarkdownDisplay>{message}</MarkdownDisplay>
              </Section.Box>
            )}
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
          </Section.Wrapper>
        </div>
      </div>
    </PageBase>
  )
}
