import mongoose from "mongoose";

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

export default mongoose.model("Photo", photoSchema);
