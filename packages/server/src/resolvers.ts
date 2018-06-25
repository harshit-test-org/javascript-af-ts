import { neo4jgraphql } from "neo4j-graphql-js";

const typeDefs = {
  Query: {
    getUserById: neo4jgraphql
  }
};

export default typeDefs;
