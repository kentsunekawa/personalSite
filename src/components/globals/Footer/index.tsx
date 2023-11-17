"use client"
// import from libraries

// import from this project
import { APP_INFO } from "@/constants"
import { useStyle, useProfile } from "@/hooks"
import { Texts } from "@/components/parts/Texts"
import { Button } from "@/components/parts/Button"
import { Accounts } from "@/components/parts/Accounts"
import { createStyles } from "./styles"

type Props = {
  isSimple?: boolean
}

export const Footer: React.FC<Props> = ({ isSimple }) => {
  const { styles } = useStyle(createStyles)

  const { profile } = useProfile()

  return (
    <footer css={styles.container}>
      <div css={styles.content.container}>
        {!isSimple && profile && (
          <div css={styles.content.row}>
            <Accounts accounts={profile.accounts} email={profile.email} />
          </div>
        )}
        <div css={styles.content.row}>
          <Texts.Text size="s">&copy; {APP_INFO.copyright}</Texts.Text>
        </div>
      </div>
    </footer>
  )
}
