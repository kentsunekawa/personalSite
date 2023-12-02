"use client"
// import from libraries

// import from this project
import { CONTENTS } from "@/constants"
import { useStyle } from "@/hooks"
import { createPeriodText } from "@/utils"
import { Texts } from "@/components/parts/Texts"
import { WorkHistory, Lang } from "@/graphql/generated/types"
import { createStyles } from "./styles"

export type Props = {
  lang: Lang
  workHistories: readonly WorkHistory[]
}

export const WorkHistories: React.FC<Props> = ({ lang, workHistories }) => {
  const { styles } = useStyle(createStyles)

  return (
    <div css={styles.container}>
      <ul css={styles.list}>
        {workHistories.map(({ id, name, period, position, employmentType }) => (
          <li key={id} css={styles.item}>
            <div css={styles.box}>
              <div css={styles.date}>
                <Texts.Caption>{createPeriodText(period, lang)}</Texts.Caption>
              </div>
              <div css={styles.name}>
                <Texts.Text>{name}</Texts.Text>
                {(employmentType || position) && (
                  <Texts.Caption>
                    {employmentType &&
                      CONTENTS[lang].employmentType[employmentType]}
                    {employmentType && position && "　|　"}
                    {position}
                  </Texts.Caption>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
