import assert from "node:assert"
import { ApolloServer } from "@apollo/server"
import { NextResponse } from "next/server"
import { addResolversToSchema } from "@graphql-tools/schema"

import { schema } from "@/graphql/schema"
import { resolvers } from "@/graphql/resolvers"

const schemaWithResolvers = addResolversToSchema({ schema, resolvers })

const server = new ApolloServer({
  schema: schemaWithResolvers,
})

export async function POST(request: Request): Promise<NextResponse> {
  const json = await request.json()
  const res = await server.executeOperation({ query: json.query })
  assert(res.body.kind === "single")
  return NextResponse.json(res.body.singleResult)
}
