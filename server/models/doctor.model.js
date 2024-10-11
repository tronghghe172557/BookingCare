const mongoose = require("mongoose");

const DOCUMENT_NAME = "Doctor";
const COLLECTION_NAME = "doctors";

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    centerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Center",
      required: true,
    },
    jobData: {
      specialization: { type: String, required: true }, // chuyên khoa 
      experience: { type: Number, required: true }, // số năm kinh nghiệm
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = mongoose.model(DOCUMENT_NAME, doctorSchema);
