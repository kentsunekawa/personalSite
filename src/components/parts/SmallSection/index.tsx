'use client'
// import from libraries

// import from this project
import { FB } from '@/components/parts/FB'
import { SectionTitle } from '@/components/parts/SectionTitle'

export type Props = {
  title: string
  children: React.ReactNode
}

export const SmallSection: React.FC<Props> = ({ title, children }) => {
  return (
    <FB gap={2}>
      <SectionTitle>{title}</SectionTitle>
      <FB gap={[1]}>{children}</FB>
    </FB>
  )
}
