const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
  {
    cdnUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", photoSchema);
