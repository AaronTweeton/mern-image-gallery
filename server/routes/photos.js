var express = require("express");
var router = express.Router();

/* GET photos. */
router.get("/", function (req, res, next) {
  res.send("Respond with photos");
});

module.exports = router;
