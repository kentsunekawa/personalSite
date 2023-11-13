"use client"
// import from libraries

// import from this project
import { Lang, WorkHistory as WorkHistoryType } from "@/graphql/generated/types"
import { ContentsBox } from "@/components/parts/contents/ContentsBox"
import { MarkdownDisplay } from "@/components/parts/MarkdownDisplay"
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
  return (
    <div css={styles.container}>
      <div>
        {workHistories.length > 0 && (
          <ul>
            {workHistories.map(
              ({
                id,
                slug,
                name,
                employmentType,
                position,
                period: { start, end },
                description,
              }) => (
                <li key={id}>
                  <ContentsBox
                    lang={lang}
                    contents={{
                      title: {
                        tag: "h3",
                        node: name,
                      },
                      subTitle: `${
                        position ? `${position} ` : ""
                      }${employmentType}`,
                      period: {
                        start,
                        end,
                      },
                      main: description && (
                        <div>
                          <MarkdownDisplay>{description}</MarkdownDisplay>
                        </div>
                      ),
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
