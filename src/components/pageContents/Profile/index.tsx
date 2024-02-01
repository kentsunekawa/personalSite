'use client'
// import from this project
import { PageState } from '@/types'
import { useStyle } from '@/hooks'
import { Profile as ProfileType } from '@/graphql/generated/types'
import { PageBase } from '@/components/globals/PageBase'
import { PageContent } from '@/components/parts/PageContent'
import { MarkdownDisplay } from '@/components/parts/MarkdownDisplay'
import { Skills } from '@/components/pageContents/Profile/Skills'
import { EducationalBackgrounds } from '@/components/pageContents/Profile/EducationalBackgrounds'
import { WorkHistories } from '@/components/pageContents/Profile/WorkHistories'
import { SectionBox } from '@/components/parts/SectionBox'
import { createStyles } from './styles'
import { Profile as ProfileSection } from './contents/Profile'
import { Slogan } from './contents/Slogan'

type Props = PageState & {
  profile: ProfileType
}

export const Profile: React.FC<Props> = ({ lang, profile }) => {
  const { introduction, skills, educationalBackgrounds, workHistories } =
    profile

  const { styles } = useStyle(createStyles)

  return (
    <PageBase>
      <PageContent
        breadCrumsInfo={{
          lang,
          clumbs: [
            {
              pageName: 'home',
            },
            {
              isCurrent: true,
              pageName: 'profile',
            },
          ],
        }}
      >
        <div css={styles.layout.container}>
          <div css={styles.layout.main}>
            <SectionBox
              title={{
                tag: 'h2',
                text: 'PROFILE',
              }}
              main={<ProfileSection lang={lang} data={profile} />}
            />
            <SectionBox
              title={{
                tag: 'h2',
                text: 'SLOGAN',
              }}
              main={<Slogan />}
            />
            {skills.length > 0 && (
              <SectionBox
                title={{
                  tag: 'h2',
                  text: 'SKILLS',
                }}
                main={<Skills skills={skills} />}
              />
            )}
            {educationalBackgrounds.length > 0 && (
              <SectionBox
                title={{
                  tag: 'h2',
                  text: 'EDUCATION',
                }}
                main={
                  <EducationalBackgrounds
                    lang={lang}
                    educationalBackgrounds={educationalBackgrounds}
                  />
                }
              />
            )}
            {workHistories.length > 0 && (
              <SectionBox
                title={{
                  tag: 'h2',
                  text: 'WORK HISTORY',
                }}
                main={
                  <WorkHistories lang={lang} workHistories={workHistories} />
                }
              />
            )}
            {introduction && (
              <SectionBox
                title={{
                  tag: 'h2',
                  text: 'PERSONALITY',
                }}
                main={<MarkdownDisplay>{introduction}</MarkdownDisplay>}
              />
            )}
          </div>
        </div>
      </PageContent>
    </PageBase>
  )
}
