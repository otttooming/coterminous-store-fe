const express = require("express");
const next = require("next");
const path = require("path");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: "./dist", dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use("/static", express.static(path.join(__dirname + "/static")));

  server.get("*", (req, res) => {
    const q = {
      path: req.path,
      query: req.query,
      ip: req.ip,
    };
    return app.render(req, res, "/", q);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
