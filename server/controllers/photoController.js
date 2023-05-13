const Photo = require("../models/Photo");
const mongoose = require("mongoose");

const getPhotos = async (req, res) => {
  const photos = await Photo.find({}).sort({ createdAt: -1 });
  res.status(200).json(photos);
};

const createPhoto = async (req, res) => {
  const { filename } = req.body;

  try {
    const photo = await Photo.create({ filename });
    res.status(200).json(photo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPhoto = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Photo not found." });
  }

  const photo = await Photo.findById(id);

  if (!photo) {
    return res.status(404).json({ error: "Photo not found." });
  }
  res.status(200).json(photo);
};

const updatePhoto = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Photo not found." });
  }

  const photo = await Photo.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!photo) {
    return res.status(404).json({ error: "Photo not found." });
  }
  res.status(200).json(photo);
};

const deletePhoto = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Photo not found." });
  }

  const photo = await Photo.findOneAndDelete({ _id: id });

  if (!photo) {
    return res.status(404).json({ error: "Photo not found." });
  }
  res.status(200).json(photo);
};

module.exports = {
  createPhoto,
  deletePhoto,
  getPhotos,
  getPhoto,
  updatePhoto,
};
