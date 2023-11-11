"use client"
// import from libraries
import dynamic from "next/dynamic"

// import from this project
import { PageState } from "@/types"
import { Profile, Post } from "@/graphql/generated/types"
import { APP_INFO } from "@/constants"
import { useStyle } from "@/hooks"
import { PageBase } from "@/components/globals/PageBase"
import { MQ } from "@/components/parts/MQ"
import { Nav } from "./Nav"
import { Accounts } from "@/components/parts/Accounts"
import { Texts } from "@/components/parts/Texts"
import { Button } from "@/components/parts/Button"
import { Posts } from "./Posts"
import { createStyles } from "./styles"

type Props = PageState & {
  profile: Profile
  posts: Post[]
}

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
})

export const Home: React.FC<Props> = ({ lang, profile, posts }) => {
  const { name, businessTitle, accounts, email } = profile

  const { styles } = useStyle(createStyles)

  return (
    <PageBase showTopLogo={false} showNav={false}>
      <div>
        <div>
          <Texts.Heading size="h3" tag="h1" insertCss={styles.slogan}>
            {APP_INFO.catchCopy}
          </Texts.Heading>
        </div>
        <div>
          <Texts.Text>{name}</Texts.Text>
          <Texts.Text>{businessTitle}</Texts.Text>
          <Button
            // href={`mailto:${email}`}
            href="hog"
          >
            {email}
          </Button>
          <div>
            <Accounts accounts={accounts} />
          </div>
        </div>
        <Nav />
        <MQ mq="tbMin_gt">
          <div>
            <Posts posts={posts} lang={lang} />
          </div>
        </MQ>
      </div>
    </PageBase>
  )
}
