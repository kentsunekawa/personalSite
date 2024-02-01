'use client'
// import from libraries

// import from this project
import { useStyle } from '@/hooks'
import { Texts, Heading } from '@/components/parts/Texts'
import { FB } from '@/components/parts/FB'
import { createStyles } from './styles'

export type Props = {
  value?: string
}

export const Slogan: React.FC<Props> = ({ value }) => {
  const { styles } = useStyle(createStyles)
  return (
    <FB gap={[3]}>
      <FB>
        <Heading>
          Developing UX
          <br />
          Beyond screens
        </Heading>
        <Heading>To make the world better</Heading>
      </FB>
      <FB>
        <Texts.Text size='l' lineHeight={4}>
          アプリケーションの UX
          を、デザインやエンジニアリングが欠かせない範囲において可能な限り向上し、良いプロダクト、サービス、企業作りに貢献すること、そしてそれを継続していくことで、人々の生活の質を向上し、世界を今より少しでも良くすること
        </Texts.Text>
      </FB>
    </FB>
  )
}
