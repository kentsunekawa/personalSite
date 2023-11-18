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

  const contents = {
    [Lang.Ja]: {
      labels: {
        employmentType: "雇用形態",
        position: "ポジジョン",
      },
    },
    [Lang.En]: {
      labels: {
        employmentType: "Enployment type",
        position: "Responsibility",
      },
    },
  }

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
                            label: contents[lang].labels.employmentType,
                            data: (
                              <Texts.Text>
                                {CONTENTS[lang].employmentType[employmentType]}
                              </Texts.Text>
                            ),
                          },
                        ]
                      : []),
                    ...(position
                      ? [
                          {
                            label: contents[lang].labels.position,
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
