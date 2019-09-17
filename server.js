const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const fs = require("fs");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
//`http://192.168.0.104:3000/v1/links/${req.params.id}`
app.prepare().then(() => {
  const server = express();
  server.use(cookieParser());

  const options = {
    root: __dirname + "/static/",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8"
    }
  };
  server.get("/robots.txt", (req, res) =>
    res.status(200).sendFile("robots.txt", options)
  );

  server.get("/items/:id", (req, res) => {
    return app.render(req, res, "/item", { id: req.params.id });
  });

  server.get("/orders/:id", (req, res) => {
    return app.render(req, res, "/order", { id: req.params.id });
  });

  server.get("/actions/:id", (req, res) => {
    return app.render(req, res, "/action", { id: req.params.id });
  });

  server.get("/discounts/:id", (req, res) => {
    return app.render(req, res, "/discount", { id: req.params.id });
  });

  server.get("/brands/:id", (req, res) => {
    return app.render(req, res, "/brand", {
      ...req.query,
      id: req.params.id,
      token: req.cookies.token
    });
  });

  server.get("/groups/:id", (req, res) => {
    console.log("HERE");
    return app.render(req, res, "/group", {
      ...req.query,
      id: req.params.id,
      token: req.cookies.token
    });
  });

  server.get("/i/:id", (req, res) => {
    return app.render(req, res, "/i", { id: req.params.id });
  });

  server.get("/p/:id", (req, res) => {
    return app.render(req, res, "/page", { id: req.params.id });
  });

  server.get("/posts/:id", (req, res) => {
    return app.render(req, res, "/post", { id: req.params.id });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  if (dev) {
    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  } else {
    var filePath = "/home/deployer/tmp/front.sock";
    try {
      fs.unlinkSync(filePath);
    } catch (e) {
      console.log("now old sock");
    }
    server.listen("/home/deployer/tmp/front.sock", () => {
      fs.chmod("/home/deployer/tmp/front.sock", 511, () =>
        console.log("SETTED_CHMOD")
      );
      console.log("RUN");
    });
  }
});
