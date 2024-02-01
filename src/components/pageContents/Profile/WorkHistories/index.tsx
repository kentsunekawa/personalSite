'use client'
// import from libraries

// import from this project
import { CONTENTS } from '@/constants'
import { createPeriodText } from '@/utils'
import { Lang, WorkHistory as WorkHistoryType } from '@/graphql/generated/types'
import { ContentsBox } from '@/components/parts/contents/ContentsBox'
import { BoxList } from '@/components/parts/contents/BoxList'
import { MarkdownDisplay } from '@/components/parts/MarkdownDisplay'
import { ReplaceLineFeedCodeToBr } from '@/components/parts/ReplaceLineFeedCodeToBr'
import { Texts } from '@/components/parts/Texts'

export type WorkHistory = Pick<
  WorkHistoryType,
  | 'id'
  | 'slug'
  | 'name'
  | 'employmentType'
  | 'position'
  | 'period'
  | 'summary'
  | 'description'
>

export type Props = {
  lang: Lang
  workHistories: readonly WorkHistory[]
}

export const WorkHistories: React.FC<Props> = ({ lang, workHistories }) => {
  const contents = {
    [Lang.Ja]: {
      labels: {
        employmentType: '雇用形態',
        position: 'ポジジョン',
      },
    },
    [Lang.En]: {
      labels: {
        employmentType: 'Enployment type',
        position: 'Responsibility',
      },
    },
  }

  return (
    <BoxList
      withSeparator={false}
      contents={workHistories.map(
        ({
          id,
          // slug,
          name,
          employmentType,
          position,
          period,
          summary,
          description,
        }) => ({
          key: id,
          node: (
            <ContentsBox
              contents={{
                title: {
                  tag: 'h3',
                  node: name,
                },
                caption: createPeriodText(period, lang),
                metaInfo: [
                  ...(employmentType
                    ? [
                        {
                          label: contents[lang].labels.employmentType,
                          data: CONTENTS[lang].employmentType[employmentType],
                        },
                      ]
                    : []),
                  ...(position
                    ? [
                        {
                          label: contents[lang].labels.position,
                          data: position,
                        },
                      ]
                    : []),
                ],
                summary: summary && (
                  <Texts.Text>
                    <ReplaceLineFeedCodeToBr>{summary}</ReplaceLineFeedCodeToBr>
                  </Texts.Text>
                ),
                moreArea: description && (
                  <div>
                    <MarkdownDisplay>{description}</MarkdownDisplay>
                  </div>
                ),
              }}
            />
          ),
        }),
      )}
    />
  )
}
