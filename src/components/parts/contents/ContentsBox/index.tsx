'use client'
// import from libraries
import { useState } from 'react'

// import from this project
import { InsertStyles } from '@/types'
import { useStyle } from '@/hooks'
import { HeadingSize } from '@/styles/commonStyles/textStyles'
import {
  DefinitionTable,
  Props as DefinitionTableProps,
} from '@/components/parts/DefinitionTable'
import { Texts } from '@/components/parts/Texts'
import { Button } from '@/components/parts/Button'
import { FB } from '@/components/parts/FB'
import { createStyles } from './styles'

export type Props = {
  contents: {
    title: {
      tag: HeadingSize
      node: React.ReactNode
    }
    summary?: React.ReactNode
    caption?: string
    metaInfo?: DefinitionTableProps['data']
    main?: React.ReactNode
    moreArea?: React.ReactNode
  }
  insertStyles?: InsertStyles<'container'>
}

export const ContentsBox: React.FC<Props> = ({ contents, insertStyles }) => {
  const { styles } = useStyle(createStyles)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { title, summary, caption, metaInfo, main, moreArea } = contents

  return (
    <article css={[styles.container, insertStyles?.container]}>
      <FB gap={[5, 0]}>
        <FB gap={[3, 0]}>
          <FB gap={[2, 0]}>
            {caption && (
              <div>
                <Texts.Text lineHeight={3}>{caption}</Texts.Text>
              </div>
            )}
            <div>
              <Texts.Heading tag={title.tag} size='h1' lineHeight={6}>
                {title.node}
              </Texts.Heading>
            </div>
          </FB>
          {summary && (
            <div>
              <Texts.Text size='l' lineHeight={4}>
                {summary}
              </Texts.Text>
            </div>
          )}
          {metaInfo && (
            <div>
              <DefinitionTable
                data={metaInfo.map(({ label, data }) => ({
                  label,
                  data: <Texts.Text lineHeight={3.5}>{data}</Texts.Text>,
                }))}
                insertStyles={styles.definitionTableStyles}
              />
            </div>
          )}
        </FB>
        {main && <div>{main}</div>}
        {moreArea && (
          <>
            {isOpen && <div>{moreArea}</div>}
            <div>
              <Button
                type='filled'
                size='l'
                onClick={() => setIsOpen((prev) => !prev)}
                color='gray'
              >
                {isOpen ? 'Hide' : 'More'}
              </Button>
            </div>
          </>
        )}
      </FB>
    </article>
  )
}
