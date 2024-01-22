import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { APP_INFO } from '@/constants/appInfo'
import { GlobalStyle } from '@/components/globals/GlobalStyles'
import { ApolloProvider } from '@/components/providers/ApolloProvider'
import { PageStateProvider } from '@/components/providers/PageStateProvider'
import { CommonDataProvider } from '@/components/providers/CommonDataProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
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
    <html lang='ja'>
      <meta name='robots' content='noindex' />
      <GlobalStyle />
      <body className={inter.className}>
        <ApolloProvider>
          <PageStateProvider>
            <CommonDataProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </CommonDataProvider>
          </PageStateProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}
