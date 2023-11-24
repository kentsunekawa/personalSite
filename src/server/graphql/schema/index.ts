import { loadSchemaSync } from "@graphql-tools/load"
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader"

export const schema = loadSchemaSync("./**/*.graphqls", {
  loaders: [new GraphQLFileLoader()],
})
