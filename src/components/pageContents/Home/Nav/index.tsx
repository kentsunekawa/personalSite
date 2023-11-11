"use client"
// import from libraries

// import from this project
import { useStyle, usePageState } from "@/hooks"
import { getPageInfo } from "@/utils"
import { Button as ButtonParts } from "@/components/parts/Button"
import { createStyles } from "./styles"

const Button: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  href,
}) => (
  <ButtonParts href={href} size="l" type="block">
    {children}
  </ButtonParts>
)

export const Nav: React.FC = () => {
  const { styles } = useStyle(createStyles)
  const { pageState } = usePageState()

  if (!pageState) return null

  return (
    <nav css={styles.container}>
      <ul css={styles.list}>
        <li>
          <Button href={getPageInfo("profile").createPath(pageState.lang)}>
            Profile
          </Button>
        </li>
        <li>
          <Button href={getPageInfo("projects").createPath(pageState.lang)}>
            Projects
          </Button>
        </li>
        <li>
          <Button href={getPageInfo("experiences").createPath(pageState.lang)}>
            Experiences
          </Button>
        </li>
      </ul>
    </nav>
  )
}
