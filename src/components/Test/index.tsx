import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export const Test = () => {
  const { styles } = useStyle(createStyles)
  return <div css={styles.container}>Test</div>
}
