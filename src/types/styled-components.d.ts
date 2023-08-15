import "styled-components"
import { CSSProp } from "styled-components"

declare module "react" {
  interface Attributes {
    css?: CSSProp
  }
}

type ColorScale = {
  right: string
  main: string
  dark: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: ColorScale
      secondary: string
    }
  }
}
