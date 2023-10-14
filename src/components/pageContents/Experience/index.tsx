import { Lang, Post } from "@/graphql/generated/types"
import { PageBase } from "@/components/globals/PageBase"

type Props = {
  lang?: Lang
  post: Post
}

export const Experience: React.FC<Props> = ({ lang = Lang.Ja, post }) => {
  const { title } = post
  return (
    <PageBase>
      <div>{title}</div>
    </PageBase>
  )
}
