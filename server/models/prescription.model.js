const mongoose = require("mongoose");

const DOCUMENT_NAME = "Prescription";
const COLLECTION_NAME = "prescriptions";

const prescriptionSchema = new mongoose.Schema( // đơn thuốc
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    items: [
      {
        itemId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Item",
          required: true,
        },
        amount: { type: Number, required: true },
        status: {
          type: String,
          enum: ["active", "completed"],
          default: "active",
        },
        // should have a expiry date 
      },
    ],
    time: { type: Date, required: true },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = mongoose.model(DOCUMENT_NAME, prescriptionSchema);
