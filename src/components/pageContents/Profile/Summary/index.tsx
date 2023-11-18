"use client"
// import from libraries
import Image from "next/image"

// import from this project
import { Lang } from "@/graphql/generated/types"
import { Profile } from "@/graphql/generated/types"
import { useStyle } from "@/hooks"
import { CONTENTS } from "@/constants"
import { formatDateString } from "@/utils"
import { Texts } from "@/components/parts/Texts"
import { Button } from "@/components/parts/Button"
import { DefinitionTable } from "@/components/parts/DefinitionTable"
import { createStyles } from "./styles"
import { Accounts } from "@/components/parts/Accounts"

export type Props = {
  lang: Lang
  data: Profile
}

export const Summary: React.FC<Props> = ({ data, lang }) => {
  const {
    name,
    subName,
    image,
    email,
    birthDate,
    place,
    languages,
    businessTitle,
    accounts,
  } = data
  const { styles } = useStyle(createStyles)

  const contents = CONTENTS[lang]

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
            <Texts.Text size="s">{subName}</Texts.Text>
            <Texts.SubHeading weight="b">{name}</Texts.SubHeading>
          </div>
          <div css={styles.row}>
            <Texts.Text size="s">{businessTitle}</Texts.Text>
          </div>
        </div>
        <DefinitionTable
          data={[
            {
              label: "Birthdate",
              data: (
                <Texts.Text size="s">
                  {formatDateString(birthDate, lang)}
                </Texts.Text>
              ),
            },
            {
              label: "Place",
              data: <Texts.Text size="s">{place}</Texts.Text>,
            },
            {
              label: "Languages",
              data: (
                <>
                  {languages.map((language) => (
                    <Texts.Text size="s" key={language.lang}>
                      {contents.language[language.lang]} [
                      {contents.LangLevel[language.level]}]
                    </Texts.Text>
                  ))}
                </>
              ),
            },
            {
              label: "Email",
              data: (
                <Button href={`mailto:${email}`} size="s">
                  {email}
                </Button>
              ),
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
