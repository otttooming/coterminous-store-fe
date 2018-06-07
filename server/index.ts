import * as express from "express";
import * as path from "path";
import * as next from "next";

const port: number = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: "./src", dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    "/static",
    express.static(path.join(__dirname.replace("server", "") + "static"))
  );
  console.log(path.join(__dirname.replace("server", "") + "static"));

  server.get("*", (req, res) => {
    const q = {
      path: req.path,
      query: req.query,
      ip: req.ip,
    };
    return app.render(req, res, "/", q);
  });

  server.listen(port, (err: any) => {
    if (err) {
      throw err;
    }
    /* tslint:disable */
    console.log(`> Ready on http://localhost:${port}`);
    /* tslint:enable */
  });
});
