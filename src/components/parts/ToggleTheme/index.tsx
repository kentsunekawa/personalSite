"use client"
// import from libraries

// import from this project
import { useStyle, useThemeName, THEME_NAMES, castTheme } from "@/hooks"
import { createStyles } from "./styles"

export const ToggleTheme: React.FC = () => {
  const { styles } = useStyle(createStyles)
  const { themeName, setThemeName } = useThemeName()

  return (
    <div css={styles.container}>
      <select
        value={themeName}
        onChange={(e) => setThemeName(castTheme(e.target.value))}
      >
        <option value={THEME_NAMES.light}>Light</option>
        <option value={THEME_NAMES.dark}>Dark</option>
        <option value={THEME_NAMES.system}>System</option>
      </select>
    </div>
  )
}
