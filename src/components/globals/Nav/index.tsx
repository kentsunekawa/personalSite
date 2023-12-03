"use client"
// import from libraries

// import from this project
import { useStyle, usePageState, useNavButton } from "@/hooks"
import { Button } from "@/components/parts/Button"
import { createStyles } from "./styles"

export const Nav: React.FC = () => {
  const { styles } = useStyle(createStyles)
  const { pageState } = usePageState()

  const { linksInfo } = useNavButton(() => {})

  if (!pageState) return null

  return (
    <nav css={styles.container}>
      <ul css={styles.list}>
        {linksInfo.map(({ pageName, label, isCurrent, props }) => (
          <li key={pageName}>
            <Button {...props} type="block" size="s">
              {label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
