"use client"
// import from libraries

// import from this project
import { CONTENTS } from "@/constants"
import { Lang, WorkHistory as WorkHistoryType } from "@/graphql/generated/types"
import { ContentsBox } from "@/components/parts/contents/ContentsBox"
import { BoxList } from "@/components/parts/contents/BoxList"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"
import { Texts } from "@/components/parts/Texts"
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export type WorkHistory = Pick<
  WorkHistoryType,
  | "id"
  | "slug"
  | "name"
  | "employmentType"
  | "position"
  | "period"
  | "description"
>

export type Props = {
  lang: Lang
  workHistories: readonly WorkHistory[]
}

export const WorkHistories: React.FC<Props> = ({ lang, workHistories }) => {
  const { styles } = useStyle(createStyles)

  const contents = CONTENTS[lang]

  return (
    <div css={styles.container}>
      <BoxList
        contents={workHistories.map(
          ({
            id,
            slug,
            name,
            employmentType,
            position,
            period: { start, end },
            description,
          }) => ({
            key: id,
            node: (
              <ContentsBox
                lang={lang}
                contents={{
                  title: {
                    tag: "h3",
                    node: name,
                  },

                  period: {
                    start,
                    end,
                  },
                  metaInfo: [
                    ...(employmentType
                      ? [
                          {
                            label: "Employment",
                            data: (
                              <Texts.Text>
                                {contents.employmentType[employmentType]}
                              </Texts.Text>
                            ),
                          },
                        ]
                      : []),
                    ...(position
                      ? [
                          {
                            label: "Responsibility",
                            data: <Texts.Text>{position}</Texts.Text>,
                          },
                        ]
                      : []),
                  ],
                  moreArea: description && (
                    <div>
                      <MarkdownDisplay>{description}</MarkdownDisplay>
                    </div>
                  ),
                }}
              />
            ),
          })
        )}
      />
    </div>
  )
}
