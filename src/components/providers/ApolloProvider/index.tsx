"use client"
// import from libraries
import { ApolloProvider as Provider } from "@apollo/client"

// import from this project
import { client } from "@/graphql/client"

type Props = {
  children: React.ReactNode
}

export const ApolloProvider: React.FC<Props> = ({ children }) => {
  return <Provider client={client}>{children}</Provider>
}
