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

export const PageBase: React.FC<Props> = ({ children, langInfo }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      <Header langInfo={langInfo} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
