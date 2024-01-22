'use client'
// import from libraries
import { useCallback, useRef } from 'react'

// import from this project
import { PageState } from '@/types'
import { Profile, Post } from '@/graphql/generated/types'
import { useStyle, useOnResizeWindow } from '@/hooks'
import { Header } from '@/components/globals/Header'
import { Footer } from '@/components/globals/Footer'
import { MQ } from '@/components/parts/MQ'
import { Accounts } from '@/components/parts/Accounts'
import { Texts } from '@/components/parts/Texts'
import { Posts } from './Posts'
import { createStyles } from './styles'

type Props = PageState & {
  profile: Profile
  posts: Post[]
}

export const Home: React.FC<Props> = ({ lang, profile, posts }) => {
  const { name, businessTitle, accounts, email } = profile

  const containerRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  // const onResize = useCallback(() => {
  //   if (
  //     typeof window !== 'undefined' &&
  //     containerRef.current &&
  //     mainRef.current &&
  //     headerRef.current &&
  //     footerRef.current
  //   ) {
  //     containerRef.current.style.height = `${window.innerHeight}px`
  //     mainRef.current.style.height = `${
  //       containerRef.current.clientHeight -
  //       headerRef.current.clientHeight -
  //       footerRef.current.clientHeight
  //     }px`
  //   }
  // }, [])

  // useOnResizeWindow(onResize)

  const { styles } = useStyle(createStyles)

  return (
    <div css={styles.container} ref={containerRef}>
      <Header showTopLogo={false} ref={headerRef} />
      <div css={styles.main} ref={mainRef}>
        {/* <div css={styles.message}>
          <Texts.Heading size='h3' tag='h1' weight='b'>
            Developing UX
            <br />
            Beyond screens
            <br />
            <span>To make the world better.</span>
          </Texts.Heading>
        </div>
        <div css={styles.content}>
          <div css={styles.nameArea}>
            <div css={styles.businessTitle}>
              <Texts.Text align='right'>{businessTitle}</Texts.Text>
            </div>
            <div css={styles.name}>
              <Texts.Heading align='right' size='h4' weight='b'>
                Ken Tsunekawa
              </Texts.Heading>
            </div>
          </div>
          <div>
            <Accounts accounts={accounts} email={email} />
          </div>
        </div> */}
      </div>
      <MQ mq='tbMin_gt'>
        <div css={styles.postAre}>
          <Posts posts={posts} lang={lang} />
        </div>
      </MQ>
      <div css={styles.footer} ref={footerRef}>
        <Footer />
      </div>
    </div>
  )
}
