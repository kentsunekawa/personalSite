"use client"
// import from libraries
import React from "react"

// import from this project
import { Account as AccountType } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { Button } from "@/components/parts/Button"
import { createStyles } from "./styles"

export type Account = Pick<AccountType, "id" | "name" | "url">

export type Props = {
  accounts: readonly Account[]
}

export const Accounts: React.FC<Props> = ({ accounts }) => {
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      {accounts.length > 0 && (
        <ul css={styles.list}>
          {accounts.map(({ id, name, url }, i) => (
            <React.Fragment key={name}>
              <li key={id}>
                <Button href={url} target="_blank">
                  <Texts.Text size="m">{name}</Texts.Text>
                </Button>
              </li>
              {i < accounts.length - 1 && (
                <li>
                  <Texts.Text size="m">/</Texts.Text>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  )
}
