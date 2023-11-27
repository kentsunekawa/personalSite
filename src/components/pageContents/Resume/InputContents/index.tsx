"use client"
// import from libraries
import { useCallback } from "react"

// import from this project
import { useStyle } from "@/hooks"
import { createStyles } from "./styles"

type Input = {
  companyName: string
  password: string
}

export type Props = {
  inputs: Input
  onChange: (name: keyof Input, value: string) => void
  onSubmit: () => void
}

export const InputContents: React.FC<Props> = ({
  inputs,
  onChange,
  onSubmit,
}) => {
  const { styles } = useStyle(createStyles)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e)

      onChange(
        e.target.name === "password" ? "password" : "companyName",
        e.target.value
      )
    },
    [onChange]
  )

  return (
    <div css={styles.container}>
      <input
        type="text"
        name="companyName"
        value={inputs.companyName}
        onChange={handleChange}
        placeholder="companyName"
      />
      <input
        type="text"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        placeholder="password"
      />
      <button type="button" onClick={onSubmit}>
        Send
      </button>
    </div>
  )
}
