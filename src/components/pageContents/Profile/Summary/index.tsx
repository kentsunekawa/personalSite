"use client"
// import from libraries
import Image from "next/image"

// import from this project
import { Profile } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"
import { Accounts, Account } from "@/components/parts/Accounts"

type Data = Pick<
  Profile,
  "name" | "image" | "email" | "birthDate" | "businessTitle" | "speciality"
> & {
  accounts: readonly Account[]
}

export type Props = {
  data: Data
}

export const Summary: React.FC<Props> = ({ data }) => {
  const { name, image, email, birthDate, businessTitle, speciality, accounts } =
    data
  const { styles } = useStyle(createStyles)
  return (
    <div css={styles.container}>
      {image && (
        <div>
          <Image
            src={image}
            width={400}
            height={400}
            alt="avatar image"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      )}
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{email}</p>
      </div>
      <div>
        <p>{birthDate}</p>
      </div>
      <div>
        <p>{businessTitle}</p>
      </div>
      <div>
        <p>{speciality}</p>
      </div>
      {accounts.length > 0 && (
        <div>
          <Accounts accounts={accounts} />
        </div>
      )}
    </div>
  )
}
