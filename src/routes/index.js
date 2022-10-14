const express = require("express");
const router = express.Router();
const launchesRouter = require("./launches");

router.use("/launches", launchesRouter);

module.exports = router;