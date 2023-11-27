import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"

const cache = new InMemoryCache()

const link = createHttpLink({
  uri: "http://localhost:3000/graphql",
  credentials: "same-origin",
})

export const client = new ApolloClient({
  link,
  cache,
})
