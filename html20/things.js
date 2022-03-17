const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("THIS IS THE GET METHOD");
});

router.post("/post", (req, res) => {
  res.send("THIS IS THE POST METHOD");
});

module.exports = router;
