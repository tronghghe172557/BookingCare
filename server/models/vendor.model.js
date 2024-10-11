const mongoose = require("mongoose");

const DOCUMENT_NAME = "Vendor";
const COLLECTION_NAME = "vendors";

const vendorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, index: true },
    address: { type: String },
    contact: {
      phone: { type: String },
      email: { type: String },
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = mongoose.model(DOCUMENT_NAME, vendorSchema);
