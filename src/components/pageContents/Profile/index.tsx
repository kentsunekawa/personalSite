"use client"
// import from this project
import { PageState } from "@/types"
import { Profile as ProfileType } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"
import { Skills } from "@/components/parts/Skills"
import { EducationalBackgrounds } from "@/components/parts/EducationalBackgrounds"
import { WorkHistories } from "@/components/parts/WorkHistories"
import { Summary } from "./Summary"

type Props = PageState & {
  profile: ProfileType
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

  return (
    <PageBase>
      <div>
        <div>
          <Summary
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
        <div>
          <div>{message && <MarkdownDisplay>{message}</MarkdownDisplay>}</div>
          <div>
            <Skills skills={skills} />
          </div>
          <div>
            <EducationalBackgrounds
              educationalBackgrounds={educationalBackgrounds}
            />
          </div>
          <div>
            <WorkHistories workHistories={workHistories} />
          </div>
        </div>
      </div>
    </PageBase>
  )
}
