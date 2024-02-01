'use client'
// import from libraries

// import from this project
import { useStyle } from '@/hooks'
import { Footer } from '@/components/globals/Footer'
import { Header } from '@/components/globals/Header'
import { MQ } from '@/components/parts/MQ'
import { FB } from '@/components/parts/FB'
import { createStyles } from './styles'

export type Props = {
  children: React.ReactNode
}

export const PageBase: React.FC<Props> = ({ children }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      <MQ print={false}>
        <Header />
      </MQ>
      <FB justifyContent='center' insertStyles={{ container: styles.main }}>
        <div css={styles.mainInner}>{children}</div>
      </FB>
      <MQ print={false}>
        <Footer />
      </MQ>
    </div>
  )
}
