"use client"
// import from this project
import { PageState } from "@/types"
import { useStyle } from "@/hooks"
import { PageBase } from "@/components/globals/PageBase"
import { PageContent } from "@/components/parts/PageContent"
import { createStyles } from "./styles"

type Props = PageState & {}

export const NotFound: React.FC<Props> = ({ lang }) => {
  const { styles } = useStyle(createStyles)

  return (
    <PageBase>
      <PageContent>
        <div css={styles.layout.container}>404</div>
      </PageContent>
    </PageBase>
  )
}
