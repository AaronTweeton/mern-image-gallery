const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", photoSchema);
