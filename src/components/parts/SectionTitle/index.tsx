'use client'
// import from libraries

// import from this project
import { Texts } from '@/components/parts/Texts'

export type Props = {
  children: React.ReactNode
}

export const SectionTitle: React.FC<Props> = ({ children }) => (
  <Texts.Heading size='h4' lineHeight={4}>
    {children}
  </Texts.Heading>
)
