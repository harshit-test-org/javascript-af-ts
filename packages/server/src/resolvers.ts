import { neo4jgraphql } from "neo4j-graphql-js";

const typeDefs = {
  Query: {
    getUserById: neo4jgraphql
  },
  Mutation: {
    DeleteUserById: () => {
      return {
        id: "sds",
        name: "dsdaf"
      };
    }
  }
};

export default typeDefs;
