'use client'
// import from libraries
import { useCallback } from 'react'

// import from this project
import { THEME_NAMES } from '@/constants'
import { useStyle, useThemeName } from '@/hooks'
import { Icons } from '@/components/parts/Icons'
import { IconButton } from '@/components/parts/IconButton'
import { createStyles } from './styles'

const themes = [THEME_NAMES.system, THEME_NAMES.light, THEME_NAMES.dark]

export const ToggleTheme: React.FC = () => {
  const { styles } = useStyle(createStyles)
  const { themeName, setThemeName } = useThemeName()

  const change = useCallback(() => {
    const currentIndex = themes.indexOf(themeName)
    const nextIndex = (currentIndex + 1) % themes.length
    setThemeName(themes[nextIndex])
  }, [setThemeName, themeName])

  const Icon = Icons[themeName]

  return (
    <div css={styles.container}>
      <IconButton
        onClick={change}
        type='block'
        size='l'
        insertCss={{ container: styles.icon }}
      >
        <Icon />
      </IconButton>
    </div>
  )
}
