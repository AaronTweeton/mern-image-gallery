const express = require("express");
const Photo = require("../models/Photo");
const router = express.Router();
const {
  createPhoto,
  deletePhoto,
  getPhoto,
  getPhotos,
  updatePhoto,
} = require("../controllers/photoController");

/* GET photo index. */
router.get("/", getPhotos);

/* Create photo */
router.post("/", createPhoto);

/* Read photo */
router.get("/:id", getPhoto);

/* Update photo */
router.patch("/:id", updatePhoto);

/* Delete photo */
router.delete("/:id", deletePhoto);

module.exports = router;
