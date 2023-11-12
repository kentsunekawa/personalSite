"use client"
// import from libraries

// import from this project
import { useStyle } from "@/hooks"
import { Footer } from "@/components/globals/Footer"
import { Header, Props as HeaderProps } from "@/components/globals/Header"
import { createStyles } from "./styles"

export type Props = {
  children: React.ReactNode
} & HeaderProps

export const PageBase: React.FC<Props> = ({
  children,
  showTopLogo,
  showNav,
}) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      <Header showTopLogo={showTopLogo} showNav={showNav} />
      <main css={styles.main}>
        <div css={styles.mainInner}>{children}</div>
      </main>
      <Footer />
    </div>
  )
}
