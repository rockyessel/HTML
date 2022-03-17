const express = require("express");
const app = express();
const router = express.Router();

router.get("/get", (req, res) => {
  res.send("THIS IS THE GET METHOD");
});

router.post("/:name", (req, res) => {
  res.send("The id you specified is " + req.params.id);
});

module.exports = router;
