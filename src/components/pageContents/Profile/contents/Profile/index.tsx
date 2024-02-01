'use client'
// import from libraries
import React from 'react'
import Image from 'next/image'

// import from this project
import { Lang } from '@/graphql/generated/types'
import { Profile as ProfileType } from '@/graphql/generated/types'
import { useStyle } from '@/hooks'
import { CONTENTS } from '@/constants'
import { formatDateString } from '@/utils'
import { Texts } from '@/components/parts/Texts'
import { Button } from '@/components/parts/Button'
import { DefinitionTable } from '@/components/parts/DefinitionTable'
import { MarkdownDisplay } from '@/components/parts/MarkdownDisplay'
import { createStyles } from './styles'
import { Accounts } from '@/components/parts/Accounts'

export type Props = {
  lang: Lang
  data: ProfileType
}

export const Profile: React.FC<Props> = ({ data, lang }) => {
  const {
    name,
    subName,
    image,
    email,
    birthDate,
    place,
    languages,
    businessTitle,
    accounts,
    message,
  } = data
  const { styles } = useStyle(createStyles)

  const contents = CONTENTS[lang]

  return (
    <div css={styles.container}>
      <div css={styles.upper.container}>
        {image && (
          <div css={styles.upper.image}>
            <Image
              src={image}
              width={400}
              height={400}
              alt='avatar image'
              css={styles.image}
            />
          </div>
        )}
        <div css={styles.upper.main}>
          <div css={styles.titleArea}>
            <div css={styles.row}>
              <Texts.Heading tag='h3' size='h4' weight='m' lineHeight={3}>
                {businessTitle}
              </Texts.Heading>
            </div>
            <div css={styles.nameArea}>
              <Texts.Heading size='h5' lineHeight={3}>
                {name}
              </Texts.Heading>
              <Texts.Text size='s' weight='r' lineHeight={2}>
                {subName}
              </Texts.Text>
            </div>
          </div>
          <div css={styles.metaArea}>
            <DefinitionTable
              data={[
                {
                  label: 'Birthdate',
                  data: (
                    <Texts.Text size='s' lineHeight={2}>
                      {formatDateString(birthDate, lang)}
                    </Texts.Text>
                  ),
                },
                {
                  label: 'Place',
                  data: (
                    <Texts.Text size='s' lineHeight={2}>
                      {place}
                    </Texts.Text>
                  ),
                },
                {
                  label: 'Languages',
                  data: (
                    <Texts.Text size='s' lineHeight={2}>
                      {languages.map((language, i) => (
                        <React.Fragment key={language.lang}>
                          {contents.language[language.lang]} （
                          {contents.LangLevel[language.level]}）
                          {i !== languages.length - 1 && ' / '}
                        </React.Fragment>
                      ))}
                    </Texts.Text>
                  ),
                },
                {
                  label: 'Email',
                  data: (
                    <Button href={`mailto:${email}`} size='s' lineHeight={2}>
                      {email}
                    </Button>
                  ),
                },
                {
                  label: 'Accounts',
                  data: accounts.length > 0 && <Accounts accounts={accounts} />,
                },
              ]}
              insertStyles={styles.dlStyles}
            />
          </div>
        </div>
      </div>
      {message && <MarkdownDisplay>{message}</MarkdownDisplay>}
    </div>
  )
}
