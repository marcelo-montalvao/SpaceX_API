const express = require("express");
const router = express.Router();
const LaunchService = require("../services/launches");

const launchService = new LaunchService();

router.get("/NextList", async (req, res) => {
  try {
    const launches = await launchService.getNextList();
    res.json(launches);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/NextOne", async (req, res) => {
  try {
    const launches = await launchService.getNext();
    res.json(launches);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/PreviousList", async (req, res) => {
  try {
    const launches = await launchService.getPreviousList();
    res.json(launches);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/PreviousOne", async (req, res) => {
  try {
    const launches = await launchService.getPrevious();
    res.json(launches);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;