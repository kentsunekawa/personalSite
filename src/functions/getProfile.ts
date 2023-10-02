import { client } from "@/graphql/client"
import {
  GetProfileQuery,
  GetProfileDocument,
  GetProfileQueryVariables,
  Lang,
} from "@/graphql/generated/types"

export const getProfile = (lang: Lang = Lang.Ja) => {
  return client.query<GetProfileQuery, GetProfileQueryVariables>({
    query: GetProfileDocument,
    variables: {
      lang,
    },
  })
}
