// import { client } from "@/graphql/client"
import {
  // GetProfileQuery,
  // GetProfileDocument,
  // GetProfileQueryVariables,
  Lang,
} from "@/graphql/generated/types"
import { createProfile } from "@/server/graphql/resolvers/profile"

export const getProfile = (lang: Lang = Lang.Ja) => {
  const variables = {
    lang,
  }

  // return client.query<GetProfileQuery, GetProfileQueryVariables>({
  //   query: GetProfileDocument,
  //   variables,
  // })

  return Promise.resolve({
    data: {
      profile: createProfile(variables),
    },
  })
}
