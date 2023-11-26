import { Lang, Profile, Project, Resume } from "@/graphql/generated/types"
import { Ja } from "./Ja"
import { En } from "./En"

export type Props = {
  profile: Profile
  resume: Resume
}

export const ResumeContents = {
  [Lang.Ja]: Ja,
  [Lang.En]: En,
}
