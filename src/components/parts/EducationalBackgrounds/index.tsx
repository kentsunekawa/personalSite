"use client"
// import from libraries

// import from this project
import {
  Lang,
  EducationalBackground as EducationalBackgroundType,
} from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { ContentsBox } from "@/components/parts/contents/ContentsBox"
import { createStyles } from "./styles"

export type EducationalBackground = Pick<
  EducationalBackgroundType,
  "id" | "name" | "department" | "period"
>

export type Props = {
  lang: Lang
  educationalBackgrounds: readonly EducationalBackground[]
}

export const EducationalBackgrounds: React.FC<Props> = ({
  lang,
  educationalBackgrounds,
}) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      <div>
        {educationalBackgrounds.length > 0 && (
          <ul>
            {educationalBackgrounds.map(
              ({ id, name, department, period: { start, end } }) => (
                <li key={id}>
                  <ContentsBox
                    lang={lang}
                    contents={{
                      title: {
                        tag: "h3",
                        node: name,
                      },
                      subTitle: department,
                      period: {
                        start,
                        end,
                      },
                    }}
                  />
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  )
}
