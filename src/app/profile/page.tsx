import { NextPage } from "next"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"

import { NotionClient } from "@/libs/notion"
import { PageBase } from "@/components/globals/PageBase"
import { ReplaceLineFeedCodeToBr } from "@/components/parts/ReplaceLineFeedCodeToBr"

const notion = new NotionClient()

const Page: NextPage = async () => {
  const profile = await notion.getProfile()

  const allAccounts = await await notion.getAccounts()
  const accounts = allAccounts.filter(({ id }) =>
    profile.accounts.map((account) => account.id).includes(id)
  )

  const allSkills = await notion.getSkills()
  const skills = allSkills.filter(({ id }) =>
    profile.skills.map((skill) => skill.id).includes(id)
  )
  const mainSkills = skills.filter(
    ({ proficiency }) => proficiency === "experienced"
  )
  const subSkills = skills.filter(
    ({ proficiency }) => proficiency === "haveUsed"
  )

  const educationalBackgrounds = await notion.getEducationalBackgrounds()
  const workHistories = await notion.getWorkHistories()

  console.log(profile.message)

  return (
    <PageBase>
      <section>
        <div>
          <div>
            <Image src={profile.image} alt="" width={100} height={100} />
          </div>
          <div>
            <p>{profile.name}</p>
            <p>{profile.birthDate}</p>
            <p>{profile.businessTitle}</p>
            <p>{profile.speciality}</p>
            <div>
              <p>{profile.email}</p>
              <div>
                <ul>
                  {accounts.map(({ id, name, url }) => (
                    <li key={id}>
                      <a href={url} target="_blank">
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p>
              <ReactMarkdown rehypePlugins={[gfm]} className="markdown-body">
                {profile.message}
              </ReactMarkdown>
            </p>
          </div>
        </div>
        <div>
          <h2>スキル</h2>
          <div>
            <h3>メインスキル</h3>
            <div>
              <ul>
                {mainSkills.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3>使用したことがあるスキル</h3>
            <div>
              <ul>
                {subSkills.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2>経歴</h2>
          <div>
            <h3>学歴</h3>
            <div>
              <ul>
                {educationalBackgrounds.map(
                  ({ id, name, department, period: { start, end } }) => (
                    <li key={id}>
                      <div>
                        <p>{name}</p>
                        <p>{department}</p>
                        <div>
                          <p>{start}</p> ~<p>{end}</p>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div>
            <h3>職歴</h3>
            <div>
              <ul>
                {workHistories.map(
                  ({
                    id,
                    name,
                    period: { start, end },
                    employmentType,
                    position,
                  }) => (
                    <li key={id}>
                      <div>
                        <p>{name}</p>
                        <p>{position}</p>
                        <p>{employmentType}</p>
                        <div>
                          <p>{start}</p> ~<p>{end}</p>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageBase>
  )
}

export default Page
