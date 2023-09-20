import { NextPage } from "next"

import { NotionClient } from "@/libs/notion"
import { PageBase } from "@/components/globals/PageBase"

const notion = new NotionClient()

const Page: NextPage = async () => {
  const projects = await notion.getProjects()

  const allSkills = await notion.getSkills()
  const technologies = allSkills.filter(({ id }) =>
    allSkills.map((skill) => skill.id).includes(id)
  )

  const workHistories = await notion.getWorkHistories()

  return (
    <PageBase>
      <div>
        <ul>
          {projects.map(
            ({
              id,
              title,
              position,
              responsibility,
              team,
              period: { start, end },
              belonging,
            }) => (
              <li key={id}>
                <div>
                  <p>{title}</p>
                  <p>{position}</p>
                  <p>{responsibility}</p>
                  <p>{team}</p>
                  <div>
                    <p>{start}</p> ~<p>{end}</p>
                  </div>
                  <div>
                    {
                      workHistories.find(
                        (history) => history.id === belonging.id
                      )?.name
                    }
                  </div>
                  <div>
                    <ul>
                      {technologies.map(({ id, name }) => (
                        <li key={id}>{name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </PageBase>
  )
}

export default Page
