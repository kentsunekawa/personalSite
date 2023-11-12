"use client"
// import from libraries
import Image from "next/image"

// import from this project
import { Lang } from "@/graphql/generated/types"
import { Profile } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { formatDateString } from "@/utils"
import { Texts } from "@/components/parts/Texts"
import { DefinitionTable } from "@/components/parts/DefinitionTable"
import { createStyles } from "./styles"
import { Accounts, Account } from "@/components/parts/Accounts"

type Data = Pick<
  Profile,
  "name" | "image" | "email" | "birthDate" | "businessTitle" | "speciality"
> & {
  accounts: readonly Account[]
}

export type Props = {
  lang: Lang
  data: Data
}

export const Summary: React.FC<Props> = ({ data, lang }) => {
  const { name, image, email, birthDate, businessTitle, accounts } = data
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      {image && (
        <div css={styles.row}>
          <Image
            src={image}
            width={400}
            height={400}
            alt="avatar image"
            css={styles.image}
          />
        </div>
      )}
      <div css={styles.main}>
        <div css={[styles.nameArea]}>
          <div css={styles.row}>
            <Texts.SubHeading weight="b">{name}</Texts.SubHeading>
          </div>
          <div css={styles.row}>
            <Texts.Text>{businessTitle}</Texts.Text>
          </div>
        </div>
        <DefinitionTable
          data={[
            {
              label: "Birthdate",
              data: (
                <Texts.Text>{formatDateString(birthDate, lang)}</Texts.Text>
              ),
            },
            {
              label: "Email",
              data: <Texts.Text>{email}</Texts.Text>,
            },
            {
              label: "Accounts",
              data: accounts.length > 0 && <Accounts accounts={accounts} />,
            },
          ]}
          insertStyles={styles.dlStyles}
        />
      </div>
    </div>
  )
}
