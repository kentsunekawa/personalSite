'use client'
// import from libraries

// import from this project
import { APP_INFO } from '@/constants'
import { useStyle, useProfile } from '@/hooks'
import { Texts } from '@/components/parts/Texts'
import { Accounts } from '@/components/parts/Accounts'
import { createStyles } from './styles'

export const Footer: React.FC = () => {
  const { styles } = useStyle(createStyles)

  const { profile } = useProfile()

  return (
    <footer css={styles.container}>
      <div css={styles.content.container}>
        {profile && (
          <div css={styles.content.row}>
            <Accounts
              accounts={profile.accounts}
              email={profile.email}
              insertStyles={styles.accounts}
            />
          </div>
        )}
        <div css={styles.content.row}>
          <Texts.Text size='s' weight='r' align='right' lineHeight={2}>
            &copy; {APP_INFO.copyright}
          </Texts.Text>
        </div>
      </div>
    </footer>
  )
}
