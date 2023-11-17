"use client"
// import from libraries
import React from "react"

// import from this project
import { Account as AccountType } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { Button } from "@/components/parts/Button"
import { Icons } from "@/components/parts/Icons"
import { createStyles } from "./styles"

export type Account = Pick<AccountType, "id" | "name" | "url">

export type Props = {
  accounts: readonly Account[]
  email?: string
}

export const Accounts: React.FC<Props> = ({ email, accounts }) => {
  const { styles } = useStyle(createStyles)

  return (
    <div css={styles.container}>
      {accounts.length > 0 && (
        <ul css={styles.list}>
          {email && (
            <li key={email}>
              <Button href={`mailto:${email}`}>
                <Icons.Email />
              </Button>
            </li>
          )}
          {accounts.map(({ id, name, url }, i) => {
            const Icon = Icons[name]
            return (
              <React.Fragment key={name}>
                <li key={id}>
                  <Button href={url} target="_blank">
                    <Icon />
                  </Button>
                </li>
              </React.Fragment>
            )
          })}
        </ul>
      )}
    </div>
  )
}
