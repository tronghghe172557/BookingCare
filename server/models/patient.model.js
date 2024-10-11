const mongoose = require("mongoose");

const DOCUMENT_NAME = "Patient";
const COLLECTION_NAME = "patients";

const patientSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    medicalInfo: {
      allergies: [String], // dị ứng
      currentTreatment: { type: String }, // phương pháp điều trị
      currentMedicine: { type: String }, // thuốc hiện tại
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = mongoose.model(DOCUMENT_NAME, patientSchema);
