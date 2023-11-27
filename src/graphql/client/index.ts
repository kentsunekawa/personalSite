import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"

const cache = new InMemoryCache()

const link = createHttpLink({
  uri: "http://localhost:3000/graphql",
  fetchOptions: {
    mode: "cors",
  },
  credentials: "include",
})

export const client = new ApolloClient({
  link,
  cache,
  credentials: "include",
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only",
    },
  },
})
