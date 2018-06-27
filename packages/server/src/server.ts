import { ApolloServer, makeExecutableSchema } from "apollo-server";
import { v1 as neo4j } from "neo4j-driver";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import * as express from "express";
import * as session from "express-session";

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" }
  })
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const driver = neo4j.driver(
  process.env.NEO4J_URI || "bolt://localhost:7687",
  neo4j.auth.basic(
    process.env.NEO4J_USER || "neo4j",
    process.env.NEO4J_PASSWORD || "letmein"
  )
);

const server = new ApolloServer({
  context: (req: express.Request) => {
    return {
      driver,
      ip: req.ip,
      user: {
        id: "something" // Dummy user for now will get user from the session
      }
    };
  },
  schema
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen(4000, () => {
  // tslint:disable-next-line
  console.log(`Server started on https://localhost:4000`);
});
