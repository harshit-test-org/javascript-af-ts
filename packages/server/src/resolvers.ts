import { neo4jgraphql } from "neo4j-graphql-js";

const typeDefs = {
  Query: {
    getUserByUsername: neo4jgraphql,
    getRepositories: neo4jgraphql,
    getRepositoryBySlug: neo4jgraphql
  }
};

export default typeDefs;
