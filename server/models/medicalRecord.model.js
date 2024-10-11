const mongoose = require("mongoose");

const DOCUMENT_NAME = "MedicalRecord";
const COLLECTION_NAME = "medicalRecords";

const medicalRecordSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    time: { type: Date, required: true },
    recordData: {
      diagnosis: [], // [], // chuẩn đoán
      treatment: []// { type: String, required: true }, // phương pháp điều trị
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = mongoose.model(DOCUMENT_NAME, medicalRecordSchema);
