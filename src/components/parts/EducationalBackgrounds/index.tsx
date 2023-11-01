"use client"
// import from libraries

// import from this project
import { EducationalBackground as EducationalBackgroundType } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export type EducationalBackground = Pick<
  EducationalBackgroundType,
  "id" | "name" | "department" | "period"
>

export type Props = {
  educationalBackgrounds: readonly EducationalBackground[]
}

export const EducationalBackgrounds: React.FC<Props> = ({
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
                  <p>{name}</p>
                  <p>{department}</p>
                  <div>
                    <p>{start}</p>〜<p>{end}</p>
                  </div>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  )
}
