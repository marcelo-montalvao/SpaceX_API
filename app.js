const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// TODO: Remove this, Temporary db
const launchs = [
  { title: "Launch1", date: "2020-05-22T17:39:00.000Z" }
]

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send(launchs);
})

app.listen(3000, () => {
  console.log("listening on port 3000");
});
