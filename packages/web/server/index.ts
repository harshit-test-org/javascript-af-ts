import * as express from "express";
import * as next from "next";

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/r/:user/:repo", (req, res) => {
    return app.render(req, res, "/repository", {
      user: req.params.user,
      repo: req.params.repo,
      ...req.query
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    // tslint:disable-next-line:no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
