const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("<h1>App Running!</h1>");
});
app.use("/api", routes);


module.exports = app;