import express from "express";
const router = express.Router();
import {
  createPhoto,
  deletePhoto,
  getPhoto,
  getPhotos,
  updatePhoto,
} from "../controllers/photoController";

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

export default router;
