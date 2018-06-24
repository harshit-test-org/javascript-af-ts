import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    getUserById(id: ID!): User
  }
  type Mutation {
    DeleteUserById(id: ID): User
  }
`;

export default typeDefs;
