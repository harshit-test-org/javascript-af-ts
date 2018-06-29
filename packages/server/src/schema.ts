import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    username: String!
    githubToken: String!
    profileUrl: String
    createdAt: String
    updatedAt: String
    repositories(first: Int = 10, offset: Int = 0): [Repository]
      @relation(name: "OWNER", direction: "OUT")
    newsItems(first: Int = 10, offset: Int = 0): [NewsItem]
      @relation(name: "WRITER", direction: "OUT")
    starred(first: Int = 10, offset: Int = 0): [Star]
      @relation(name: "STARGAZER", direction: "OUT")
  }

  type Repository {
    id: ID!
    slug: String!
    githubUrl: String!
    githubName: String!
    githubOwner: String!
    owner: User @relation(name: "OWNER", direction: "IN")
    stars(first: Int = 10, offset: Int = 0): [Star]
      @relation(name: "STARRED_REPO", direction: "OUT")
    createdAt: String!
  }

  type NewsItem {
    id: ID!
    title: String!
    slug: String!
    content: String!
    writer: User @relation(name: "WRITER", direction: "IN")
    previewImage: String
    createdAt: String!
  }

  type Talk {
    id: ID!
    title: String!
    iframe: String!
    speaker: String
    previewImage: String!
    createdAt: String!
  }

  type Star {
    id: ID!
    user: User @relation(name: "STARGAZER", direction: "IN")
    repository: Repository @relation(name: "STARRED_REPO", direction: "IN")
    createdAt: String!
  }

  type Query {
    getUserByUsername(username: String!): User
    getRepositories(first: Int = 10, offset: Int = 0): [Repository!]
    getRepositoryBySlug(slug: String!, ownerUsername: String!): Repository
  }
`;

export default typeDefs;
