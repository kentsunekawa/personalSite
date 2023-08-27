"use client"
// import from libraries

// import from this project
import { useStyle } from "@/hooks"
import { Footer } from "@/components/globals/Footer"
import { Header } from "@/components/globals/Header"
import { createStyles } from "./styles"

export type Props = {
  children: React.ReactNode
}

export const PageBase: React.FC<Props> = ({ children }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
