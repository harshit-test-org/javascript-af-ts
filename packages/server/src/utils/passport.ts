import * as passport from "passport";
import { Strategy as GithubStrategy } from "passport-github2";
import { v4 as uuid } from "uuid";
import { Request } from "express";
import { driver } from "../server";

const init = () => {
  // Setup use serialization
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const db = driver.session();
    db.run(`MATCH (n:User { id:{id}}) RETURN n`, { id })
      .then(user => {
        // tslint:disable-next-line no-console
        done(null, user.records[0].get("n").properties);
        db.close();
        return null;
      })
      .catch(err => {
        done(err);
        return null;
      });
  });

  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        passReqToCallback: true,
        scope: ["user"],
        callbackURL: "/auth/github/callback"
      },
      async (
        _req: Request,
        token: string,
        _tokenSecret: string,
        profile: any,
        done: any
      ) => {
        const name =
          profile.displayName || profile.username || profile._json.name || "";
        const splitProfileUrl = profile.profileUrl.split("/");
        const fallbackUsername = splitProfileUrl[splitProfileUrl.length - 1];
        const githubUsername =
          profile.username || profile._json.login || fallbackUsername;
        const user = {
          id: uuid(),
          name,
          username: githubUsername,
          githubToken: token,
          profileUrl: profile.profileUrl
        };
        const db = driver.session();
        try {
          const result = await db.run(
            `
        CREATE (user:User {id: {id}, name: {name}, username:{username}, githubToken: {githubToken}, profileUrl:{profileUrl}, createdAt: datetime(), updatedAt: datetime() })
        RETURN user;
        `,
            user
          );
          db.close();
          return done(null, result.records[0].get("user").properties);
        } catch (ex) {
          return done(ex);
        }
      }
    )
  );
};

export default init;
