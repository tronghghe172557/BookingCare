const mongoose = require("mongoose");

const DOCUMENT_NAME = "Item";
const COLLECTION_NAME = "items";

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    manufactureDate: { type: Date }, // ngày sản xuất
    expiryDate: { type: Date }, // ngày hết hạn
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = mongoose.model(DOCUMENT_NAME, itemSchema);
