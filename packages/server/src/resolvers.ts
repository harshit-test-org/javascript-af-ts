import { neo4jgraphql } from "neo4j-graphql-js";
import requireAuth from "./auth/requireAuth";

const typeDefs = {
  Query: {
    getUserByUsername: requireAuth.createResolver(neo4jgraphql),
    getRepositories: neo4jgraphql,
    getRepositoryBySlug: neo4jgraphql,
    getNewsItems: neo4jgraphql,
    getNewsItemBySlug: neo4jgraphql,
    getTalks: neo4jgraphql,
    getTalkBySlug: neo4jgraphql,
    getUserInfo: (_: any, __: any, ctx: { user?: any }, info: any): any => {
      if (!ctx.user || !ctx.user.id) {
        return null;
      }
      return neo4jgraphql(_, { id: ctx.user.id }, ctx, info);
    },
    getFeaturedRepositories: neo4jgraphql,
    getFeaturedTalks: neo4jgraphql,
    getFeaturedNewsItems: neo4jgraphql
  }
};

export default typeDefs;
