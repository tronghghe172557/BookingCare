const mongoose = require("mongoose");

const DOCUMENT_NAME = "Center";
const COLLECTION_NAME = "centers";

// Nên sử lí lại bảng này, nên tách thành 2 bảng
// bảng chứa liên kết bác sĩ với phòng khám
// phòng khám với lại thuốc

const centerSchema = new mongoose.Schema(
  {
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true, trim: true, index: true },
    doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }],
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    services: [String],
    address: { type: String },
    phone: { type: String },
    email: { type: String },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = mongoose.model(DOCUMENT_NAME, centerSchema);

// const centerDoctorSchema = new mongoose.Schema({
//   centerId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Center",
//     required: true,
//   },
//   doctorId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Doctor",
//     required: true,
//   },
// });

// const CenterDoctor = mongoose.model("CenterDoctor", centerDoctorSchema);

// module.exports = CenterDoctor;

// const centerItemSchema = new mongoose.Schema({
//   centerId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Center",
//     required: true,
//   },
//   itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
//   quantity: { type: Number, required: true }, // Lưu số lượng mặt hàng tại trung tâm này
// });

// const CenterItem = mongoose.model("CenterItem", centerItemSchema);

// module.exports = CenterItem;

// centerDoctorSchema.index({ centerId: 1, doctorId: 1 });
// centerItemSchema.index({ centerId: 1, itemId: 1 });
