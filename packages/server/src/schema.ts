import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    username: String!
    githubToken: String!
    createdAt: String
    updatedAt: String
    repositories: [Repository] @relation(name: "OWNER", direction: "OUT")
  }

  type Repository {
    id: ID!
    slug: String!
    githubUrl: String!
    githubName: String!
    githubOwner: String!
    owner: User @relation(name: "OWNER", direction: "IN")
  }

  type Query {
    getUserById(id: ID!): User
  }
`;

export default typeDefs;
