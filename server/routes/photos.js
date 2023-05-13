const express = require("express");
const Photo = require("../models/Photo");
const router = express.Router();

/* GET photo index. */
router.get("/", function (req, res, next) {
  res.json({ message: "Respond with photo index." });
});

/* Create photo */
router.post("/", async (req, res, next) => {
  const { filename } = req.body;

  try {
    const photo = await Photo.create({ filename });
    res.status(200).json(photo);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
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
