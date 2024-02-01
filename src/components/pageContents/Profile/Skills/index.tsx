'use client'
// import from libraries
import React, { useMemo } from 'react'

// import from this project
import { Skill as SkillType } from '@/graphql/generated/types'
import { createFlexBoxStyle } from '@/styles/mixin'
import { Texts } from '@/components/parts/Texts'
import { SmallSection } from '@/components/parts/SmallSection'
import { FB } from '@/components/parts/FB'

export type Skill = Pick<SkillType, 'id' | 'slug' | 'name' | 'proficiency'>

export type Props = {
  skills: readonly Skill[]
}

type ListProps = {
  title: string
  skills: readonly Skill[]
}

const List: React.FC<ListProps> = ({ title, skills }) => {
  if (skills.length === 0) return null

  return (
    <SmallSection title={title}>
      <ul css={createFlexBoxStyle({ gap: [0, 1] })}>
        {skills.map(({ id, name }, i) => (
          <React.Fragment key={id}>
            <li>
              <Texts.Text size='l' lineHeight={4}>
                {name}
              </Texts.Text>
            </li>
            {i !== skills.length - 1 && (
              <li>
                <Texts.Text size='l' lineHeight={4}>
                  /
                </Texts.Text>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </SmallSection>
  )
}

export const Skills: React.FC<Props> = ({ skills }) => {
  const experiencedSkills = useMemo(
    () => skills.filter(({ proficiency }) => proficiency === 'EXPERIENCED'),
    [skills],
  )
  const otherSkills = useMemo(
    () => skills.filter(({ proficiency }) => proficiency === 'HAVE_USED'),
    [skills],
  )

  return (
    <FB gap={[5, 0]}>
      <List title='Languages & Frameworks' skills={experiencedSkills} />
      <List title='Others' skills={otherSkills} />
    </FB>
  )
}
