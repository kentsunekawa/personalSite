"use client"
// import from libraries
import React from "react"

// import from this project
import { Account as AccountType } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { InsertStyles } from "@/types"
import { Button } from "@/components/parts/Button"
import { Icons } from "@/components/parts/Icons"
import { createStyles } from "./styles"

export type Account = Pick<AccountType, "id" | "name" | "url">

export type Props = {
  accounts: readonly Account[]
  email?: string
  insertStyles?: InsertStyles<"container" | "list">
}

export const Accounts: React.FC<Props> = ({
  email,
  accounts,
  insertStyles,
}) => {
  const { styles } = useStyle(createStyles)

  return (
    <div css={[styles.container, insertStyles?.container]}>
      {accounts.length > 0 && (
        <ul css={[styles.list, insertStyles?.list]}>
          {email && (
            <li key={email}>
              <Button href={`mailto:${email}`} insertCss={styles.button}>
                <Icons.Email />
              </Button>
            </li>
          )}
          {accounts.map(({ id, name, url }, i) => {
            const Icon = Icons[name]
            return (
              <li key={id}>
                <Button href={url} target="_blank" insertCss={styles.button}>
                  <Icon />
                </Button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
