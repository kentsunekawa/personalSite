"use client"
// import from libraries
import Link from "next/link"

// import from this project
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

export const Nav: React.FC = () => {
  const { styles } = useStyle(createStyles)
  return (
    <nav css={styles.container}>
      <ul>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/experiences">Experiences</Link>
        </li>
      </ul>
    </nav>
  )
}
