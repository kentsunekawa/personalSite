import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { APP_INFO } from "@/constants/appInfo"
import { GlobalStyle } from "@/components/globals/GlobalStyles"
import { PageStateProvider } from "@/components/providers/PageStateProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

const inter = Inter({
  weight: ["100", "400", "500", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: APP_INFO.siteName,
  description: APP_INFO.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <GlobalStyle />
      <body className={inter.className}>
        <PageStateProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </PageStateProvider>
      </body>
    </html>
  )
}
