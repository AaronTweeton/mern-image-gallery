const express = require("express");
const router = express.Router();

/* GET photo index. */
router.get("/", function (req, res, next) {
  res.json({ message: "Respond with photo index." });
});

/* Create photo */
router.post("/", function (req, res, next) {
  res.json({ message: "Created new photo." });
});

/* Read photo */
router.get("/:id", function (req, res, next) {
  res.json({ message: `Reading photo with ID: ${req.params.id}.` });
});

/* Update photo */
router.patch("/:id", function (req, res, next) {
  res.json({ message: `Updating photo with ID: ${req.params.id}.` });
});

/* Delete photo */
router.delete("/:id", function (req, res, next) {
  res.json({ message: `Deleting photo with ID: ${req.params.id}.` });
});

module.exports = router;
