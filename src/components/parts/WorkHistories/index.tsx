"use client"
// import from libraries

// import from this project
import { WorkHistory as WorkHistoryType } from "@/graphql/generated/types"
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
  workHistories: readonly WorkHistory[]
}

export const WorkHistories: React.FC<Props> = ({ workHistories }) => {
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
                  <p>{name}</p>
                  <p>{employmentType}</p>
                  <p>{position}</p>
                  <div>
                    <p>{start}</p>〜<p>{end}</p>
                  </div>
                  {description && (
                    <div>
                      <MarkdownDisplay>{description}</MarkdownDisplay>
                    </div>
                  )}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  )
}
