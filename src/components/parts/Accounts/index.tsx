"use client"
// import from libraries
import Link from "next/link"

// import from this project
import { Account as AccountType } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export type Account = Pick<AccountType, "id" | "name" | "url">

export type Props = {
  accounts: readonly Account[]
}

export const Accounts: React.FC<Props> = ({ accounts }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      <div>
        {accounts.length > 0 && (
          <ul>
            {accounts.map(({ id, name, url }) => (
              <li key={id}>
                <Link href={url} target="_blank">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
