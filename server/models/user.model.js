const mongoose = require("mongoose");

const DOCUMENT_NAME = "User";
const COLLECTION_NAME = "users"; // collection is a table in mongodb, it contains many documents

const userSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    user_slug: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"], // có 2 trạng thái
      default: "inactive",
    },
    role: {
      type: String,
      enum: ["admin", "cs", "vendor", "doctor", "patient"],
      required: true,
    },
    info: { type: Object },
    //
    isDraft: {
      type: Boolean,
      default: true,
      index: true,
      select: false, // khi chúng t sử dụng hàm query các thứ thì ko lấy trường này ra
    },

    isPublished: {
      type: Boolean,
      default: false,
      index: true,
      select: false, // khi chúng t sử dụng hàm query các thứ thì ko lấy trường này ra
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// create index for search
userSchema.index({ user_name: "text" });

// Document middlewares: create a slug for user after save in DB
userSchema.pre("save", function (next) {
  this.user_slug = slugify(this.user_name, { lower: true });
  next();
});


module.exports = mongoose.model(DOCUMENT_NAME, userSchema);
