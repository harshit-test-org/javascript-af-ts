import { ApolloServer, makeExecutableSchema } from "apollo-server";
import { v1 as neo4j } from "neo4j-driver";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import authInit from "./utils/passport";
import * as passport from "passport";
import * as express from "express";
import * as session from "express-session";

const app = express();
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

authInit();

interface Ctx {
  req: express.Request;
}

const server = new ApolloServer({
  context: ({ req }: Ctx) => {
    return {
      driver,
      user: req.user
    };
  },
  schema
});

app.get(
  "/auth/github",
  passport.authenticate("github", {
    scope: ["read:user,user:email"]
  })
);
app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    successRedirect: "https://localhost:3000",
    failureRedirect: "https://localhost:3000"
  })
);

export const driver = neo4j.driver(
  process.env.NEO4J_URI || "bolt://localhost:7687",
  neo4j.auth.basic(
    process.env.NEO4J_USER || "neo4j",
    process.env.NEO4J_PASSWORD || "letmein"
  )
);

server.applyMiddleware({ app, path: "/graphql" });

app.listen(8080, () => {
  // tslint:disable-next-line
  console.log(`Server started on https://localhost:8080`);
});
