import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareGithub,
  FaLightbulb,
  FaRegLightbulb,
  FaGear,
  FaGripLines,
} from "react-icons/fa6"
import { SiWantedly } from "react-icons/si"
import { IoMail } from "react-icons/io5"

import { SocialMedia } from "@/graphql/generated/types"

import { THEME_NAMES } from "@/constants"

export const Icons = {
  [SocialMedia.Facebook]: FaSquareFacebook,
  [SocialMedia.Instagram]: FaSquareInstagram,
  [SocialMedia.Linkedin]: FaLinkedin,
  [SocialMedia.Github]: FaSquareGithub,
  [SocialMedia.Wantedly]: SiWantedly,
  [THEME_NAMES.system]: FaGear,
  [THEME_NAMES.light]: FaRegLightbulb,
  [THEME_NAMES.dark]: FaLightbulb,
  Menu: FaGripLines,
  Email: IoMail,
} as const
