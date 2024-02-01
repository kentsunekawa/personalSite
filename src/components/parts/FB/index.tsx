'use client'
// import from libraries

// import from this project
import { InsertStyles } from '@/types'
import { createFlexBoxStyle, FlexBoxStyleArgs } from '@/styles/mixin'

type Props = {
  insertStyles?: InsertStyles<'container'>
  children: React.ReactNode
} & FlexBoxStyleArgs

export const FB: React.FC<Props> = ({ children, insertStyles, ...args }) => (
  <div css={[createFlexBoxStyle(args), insertStyles?.container]}>
    {children}
  </div>
)
