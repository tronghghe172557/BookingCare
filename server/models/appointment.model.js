const mongoose = require("mongoose");

const DOCUMENT_NAME = "Appointment";
const COLLECTION_NAME = "appointments";

const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    time: { type: Date, required: true },
    status: {
      type: String,
      enum: ["pending", "ongoing", "done"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = mongoose.model(DOCUMENT_NAME, appointmentSchema);
