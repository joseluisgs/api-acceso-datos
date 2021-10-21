// Leemos el esquema o esquemas que necesitemos

import { join } from 'path';
import { loadTypedefsSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { DocumentNode } from 'graphql';

// Definición de tipos y Esquemas de GraphQL desde fichero
// Load schema from the file
const sources = loadTypedefsSync(join(__dirname, './schema.gql'), {
  loaders: [
    new GraphQLFileLoader(),
  ],
});

const typeDefs = sources.map((source) => source.document);

export default typeDefs as unknown as DocumentNode;