"use client"

export type Props = {
  children: string
}

const regex = /(\r\n|\r|\n)/g

export const ReplaceLineFeedCodeToBr: React.FC<Props> = ({ children }) => (
  <>
    {children
      .split(regex)
      .map((l, i) => (l.match(regex) ? <br key={`${i.toString()}`} /> : l))}
  </>
)
