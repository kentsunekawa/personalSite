import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "src/graphql/operations/**/*.graphqls",
  generates: {
    // "src/graphql/generated/resolver.ts": {
    //   plugins: ["typescript", "typescript-resolvers"],
    //   config: {
    //     useIndexSignature: true,
    //     useTypeImports: true,
    //     enumsAsConst: true,
    //     immutableTypes: true,
    //     strictScalars: true,
    //   },
    // },
    "src/graphql/generated/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "typescript-resolvers",
      ],
      config: {
        useIndexSignature: true,
        useTypeImports: true,
        enumsAsConst: true,
        immutableTypes: true,
        strictScalars: true,
        scalars: {
          Date: "string",
          DateTime: "string",
        },
      },
    },
  },
}

export default config
