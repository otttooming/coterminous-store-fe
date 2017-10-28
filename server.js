const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: "./dist", dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/cart", (req, res) => {
    return app.render(req, res, "/cart", req.query);
  });
  server.get("/checkout", (req, res) => {
    return app.render(req, res, "/checkout", req.query);
  });
  server.get("/product/:name", (req, res) => {
    const q = {
      params: req.params,
      query: req.query,
      ip: req.ip,
    };
    return app.render(req, res, "/product", q);
  });
  server.get("/products/:name", (req, res) => {
    const q = {
      params: req.params,
      query: req.query,
      ip: req.ip,
    };
    return app.render(req, res, "/products", q);
  });
  server.get("/about", (req, res) => {
    return app.render(req, res, "/about", req.query);
  });
  server.get("/order/:id", (req, res) => {
    const q = {
      params: req.params,
      query: req.query,
      ip: req.ip,
    };
    return app.render(req, res, "/order", q);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
